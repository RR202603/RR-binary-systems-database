#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从 /tdb、/pdf、/diagrams 目录自动生成 data/systems.json。
支持命名：
  - 连写元素: BiNi-07Seo.tdb / BiNi-07Seo.pdf / BiNi_phase.png
  - 分隔元素: Al-Co_xxx.tdb / Fe_C_2008.pdf / NiTi1999.jpg
识别规则：优先取文件名**最前面的连续字母段**并按 [A-Z][a-z]? 切分；兜底在全名内继续匹配。
最终生成结构：
{
  "Bi-Ni": {
    "tdb": ["tdb/BiNi-07Seo.tdb", ...],
    "pdf": ["pdf/BiNi-07Seo.pdf", ...],
    "diagram": ["diagrams/BiNi_phase.png", ...]
  },
  ...
}
"""
import json, re, sys
from pathlib import Path

ELEMENTS = [
    "H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar",
    "K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr",
    "Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe",
    "Cs","Ba","La","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn",
    "Fr","Ra","Ac","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og",
    "Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu",
    "Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"
]
SYMS = set(ELEMENTS)

ROOT = Path(__file__).resolve().parents[1]
TDIR = ROOT / 'tdb'
PDIR = ROOT / 'pdf'
DDIR = ROOT / 'diagrams'
OUT  = ROOT / 'data' / 'systems.json'

IMG_EXTS = {'.png', '.jpg', '.jpeg', '.webp', '.svg'}
PDF_EXTS = {'.pdf'}
TDB_EXTS = {'.tdb'}

def first_two_symbols_from_name(name: str):
    """
    1) 取文件名最前面的纯字母片段（遇到非字母停），按 [A-Z][a-z]? 分割成候选符号。
    2) 在候选中按顺序取前两个合法元素（在 SYMS 内）。
    3) 若未找到，在整个文件名上做一次兜底扫描。
    返回: (A, B) 按字母序排序后返回；失败返回 None。
    """
    head = re.split(r'[^A-Za-z]+', name, maxsplit=1)[0]
    if head:
        parts = re.findall(r'[A-Z][a-z]?', head)
        found = [p for p in parts if p in SYMS]
        if len(found) >= 2:
            a, b = sorted(found[:2])
            return a, b

    parts2 = re.findall(r'[A-Z][a-z]?', name)
    found2 = [p for p in parts2 if p in SYMS]
    if len(found2) >= 2:
        a, b = sorted(found2[:2])
        return a, b
    return None

def add_file(bucket, key, relpath, kind):
    bucket.setdefault(key, {"tdb": [], "pdf": [], "diagram": []})
    bucket[key][kind].append(relpath)

def scan_dir(base: Path, exts: set, kind: str, bucket: dict):
    count = 0
    if not base.exists():
        return 0
    for p in base.rglob("*"):
        if p.is_file() and p.suffix.lower() in exts:
            count += 1
            keypair = first_two_symbols_from_name(p.stem)
            if not keypair:
                print("⚠️ 跳过（无法识别二元系）：", p.relative_to(ROOT))
                continue
            key = f"{keypair[0]}-{keypair[1]}"
            rel = str(p.relative_to(ROOT))
            add_file(bucket, key, rel, kind)
    return count

def main():
    bucket = {}
    n_tdb = scan_dir(TDIR, TDB_EXTS, "tdb", bucket)
    n_pdf = scan_dir(PDIR, PDF_EXTS, "pdf", bucket)
    n_img = scan_dir(DDIR, IMG_EXTS, "diagram", bucket)

    # 排序 & 去重
    bucket_sorted = {}
    for k, v in sorted(bucket.items()):
        bucket_sorted[k] = {
            "tdb": sorted(set(v["tdb"])),
            "pdf": sorted(set(v["pdf"])),
            "diagram": sorted(set(v["diagram"]))
        }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(bucket_sorted, ensure_ascii=False, indent=2), encoding='utf-8')

    print(f"✅ 已生成 {OUT} ，覆盖写入。")
    print(f"📁 统计：TDB={n_tdb}，PDF={n_pdf}，图像={n_img}；体系条目={len(bucket_sorted)}。")

if __name__ == "__main__":
    main()
