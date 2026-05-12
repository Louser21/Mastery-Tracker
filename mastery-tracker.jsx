import { useState } from "react";

const STATUS_CFG = {
  done:        { label: "DONE",        color: "#00e676", bg: "#00e67618", icon: "✓" },
  in_progress: { label: "IN PROGRESS", color: "#ffa726", bg: "#ffa72618", icon: "◉" },
  available:   { label: "TODO",        color: "#42a5f5", bg: "#42a5f518", icon: "○" },
  locked:      { label: "LOCKED",      color: "#3a3a4a", bg: "#3a3a4a18", icon: "⊘" },
};
const PRIORITY_COLOR = { CRITICAL: "#ff1744", HIGH: "#ff9100", MEDIUM: "#448aff", LOW: "#616161" };
const CARD_BG = "#0e0e16";
const BORDER = "#1c1c2e";
function GRADE_COLOR(g) {
  return { S:"#00e676", A:"#69f0ae", B:"#42a5f5", C:"#ffa726", D:"#ff7043", F:"#ef5350" }[g]||"#555";
}

const SECTIONS = [
  {
    id:"dsa", title:"DSA & Algorithms", icon:"⚡", accent:"#00e676",
    level:"Knight on LeetCode · Strong foundations · Missing advanced patterns",
    placement:"Core for every FAANG/product interview — highest interview weight",
    tracks:[
      {
        id:"dsa-core", title:"Core DS — Interview Staples", priority:"CRITICAL", status:"available", est:"2 weeks",
        pw:"Asked in 100% of tech interviews",
        sub:[
          "Arrays — prefix sums, kadane, difference arrays","Sliding window — fixed & variable size, all patterns",
          "Two pointers — sorted arrays, partitioning, 3-sum","Hashing — frequency map, anagram, subarray sum = k",
          "Monotonic Stack — next greater/smaller, histogram","Stack applications — valid parentheses, decode string",
          "Queue & Deque — sliding window maximum","Linked List — reverse, detect cycle (Floyd), merge sorted",
          "Linked List — find middle, remove nth from end, LRU","Binary Search — on sorted array, on answer space",
          "Binary Search — rotated array, find peak, lower/upper bound","Recursion basics — tower of hanoi, generate subsets",
          "Backtracking — permutations, combinations, N-queens","Backtracking — sudoku solver, word search",
          "Sorting — merge sort (count inversions), quickselect","Greedy — interval scheduling, fractional knapsack, jump game",
        ],
        rev:["Redo 5 hashing mediums cold (no hints)","Redo binary search on answer — 3 problems","Monotonic stack: trap water + histogram cold","Linked list cycle + LRU from scratch","Backtracking: permutations without looking at solution","Merge sort from scratch — trace the merge step","Two pointers: 3sum, container with most water both timed","Sliding window: longest substring K distinct — derive yourself"],
        res:["Striver A-Z Sheet","NeetCode 150","LeetCode Blind 75"],
      },
      {
        id:"dsa-trees", title:"Trees — Complete Mastery", priority:"CRITICAL", status:"available", est:"2 weeks",
        pw:"In 80%+ of all technical interviews",
        sub:[
          "Binary Tree — all traversals iterative + recursive","BFS level-order — right view, zigzag, level averages",
          "DFS — path sum, max path sum, diameter, LCA","BST — insert, delete, validate, kth smallest",
          "BST — convert sorted array, inorder successor","Serialize / Deserialize binary tree (2 approaches)",
          "Trie — insert, search, startsWith, word search II","Trie — replace words, longest word in dictionary",
          "Segment Tree — range sum query, point update","Segment Tree — lazy propagation (range update)",
          "Fenwick Tree (BIT) — prefix sum, point update","BIT 2D — 2D range sum queries",
          "N-ary tree — traversal, level order","Lowest Common Ancestor — binary tree + BST both",
        ],
        rev:["Trie — implement from scratch in 15 min","Serialize/Deserialize — both BFS and DFS approach","Segment tree lazy — derive recurrence on paper","LCA: recursive and iterative (binary lifting)","Iterative inorder without stack recursion","Diameter of binary tree — re-derive from scratch","BIT update + query — implement blindly","BST validation — all edge cases including equal nodes"],
        res:["Striver Trees Playlist","USACO Guide Trees","NeetCode Trees"],
      },
      {
        id:"dsa-graphs", title:"Graphs — Full Coverage", priority:"CRITICAL", status:"available", est:"3 weeks",
        pw:"Heavy in product + startup interviews, all CP rounds",
        sub:[
          "Graph representation — adj list, adj matrix, edge list","BFS — shortest path unweighted, multi-source BFS",
          "DFS — connected components, flood fill, islands","0-1 BFS — deque-based for 0/1 weighted graphs",
          "Topological sort — Kahn's (BFS) — detect cycle DAG","Topological sort — DFS based",
          "Cycle detection — directed graph (DFS + color)","Cycle detection — undirected (DSU + DFS)",
          "Union-Find (DSU) — union by rank + path compression","DSU — applications: Kruskal, connected components online",
          "Dijkstra — min heap, SSSP, all variants","Bellman-Ford — negative weights, SSSP",
          "Floyd-Warshall — APSP, detect negative cycle","Prim's algorithm — MST","Kruskal's algorithm — MST",
          "Bipartite check — 2-coloring BFS/DFS","Bridges & Articulation Points — Tarjan's algorithm",
          "SCC — Kosaraju's algorithm","SCC — Tarjan's algorithm",
          "Implicit graphs — word ladder, sliding puzzle, minimum jumps",
        ],
        rev:["DSU with path compression — implement from scratch","Dijkstra traced on paper with heap ops","Topological sort — both Kahn and DFS","SCC: Kosaraju — 2 DFS passes explained","Bridges vs articulation points — difference","Multi-source BFS: rotten oranges from scratch","0-1 BFS: explain why deque instead of priority queue","Bellman-Ford negative cycle detection — trace example"],
        res:["Striver Graphs Series","CP-Algorithms","NeetCode Graphs"],
      },
      {
        id:"dsa-dp", title:"Dynamic Programming — All Patterns", priority:"CRITICAL", status:"available", est:"3 weeks",
        pw:"70% of FAANG interviews, 50% product company interviews",
        sub:[
          "1D DP — fibonacci, climbing stairs, house robber I/II","Coin change I (min coins) + Coin change II (ways)",
          "2D DP — grid unique paths, obstacles, min path sum","Kadane — max subarray, max product subarray",
          "Knapsack 0/1 — subset sum, partition equal subset","Unbounded knapsack — rod cutting, coin change II",
          "LCS — longest common subsequence + print it","LIS — O(n²) DP + O(n log n) binary search",
          "Edit distance — levenshtein, one-edit apart","String DP — wildcard matching, regex matching",
          "Palindrome DP — longest palindromic subsequence, min cuts","Interval DP — burst balloons, matrix chain, stone merge",
          "Bitmask DP — TSP, min cost to visit all nodes","DP on Trees — max independent set, tree diameter DP",
          "Digit DP — count numbers with digit property in range","DP + Divide & Conquer — convex hull trick setup",
          "Knuth's optimization — matrix chain variant","SOS DP — sum over subsets",
          "Stock problems — all 6 variants (state machine DP)","Profile DP — broken profile, tiling problems",
        ],
        rev:["Coin change: tabulation + memoization both","LCS + print actual sequence","Edit distance: trace entire DP table","All 6 stock problems in one sitting","Bitmask TSP on paper step by step","LIS O(n log n): derive patience sorting intuition","Interval DP burst balloons: explain dp[i][j] definition","Digit DP: count numbers with digit sum divisible by k"],
        res:["Aditya Verma DP Playlist","AtCoder EDU DP (all 26)","NeetCode DP"],
      },
      {
        id:"dsa-strings", title:"String Algorithms", priority:"HIGH", status:"available", est:"1.5 weeks",
        pw:"Common in product interviews, heavy in CP rounds",
        sub:[
          "KMP — failure function construction, pattern matching","Z-function — Z-array, pattern occurrences",
          "Rabin-Karp — rolling hash, multiple pattern search","Aho-Corasick — trie + failure links, multi-pattern",
          "Manacher's — palindromic radii, longest palindromic substring","Suffix Array — O(n log²n) construction",
          "LCP Array — from suffix array via Kasai's algorithm","Suffix Automaton — online construction, applications",
          "String hashing — polynomial, double hash for anti-hack","Lexicographic comparison — suffix comparison tricks",
        ],
        rev:["KMP failure function — derive manually step by step","Rolling hash implementation from memory","Manacher's: odd, even, combined variants","Z-function: trace on 'aabxaa' by hand","Aho-Corasick: build failure links for 3 patterns manually"],
        res:["CP-Algorithms Strings","KACTL","E-Maxx"],
      },
      {
        id:"dsa-math", title:"Math & Number Theory", priority:"HIGH", status:"available", est:"2 weeks",
        pw:"Regular in CP, occasional in quant-style interviews",
        sub:[
          "Modular arithmetic — add, sub, mul under mod","Fast exponentiation — binary exponentiation O(log n)",
          "Modular inverse — Fermat's little theorem","Modular inverse — extended Euclidean algorithm",
          "Extended GCD — Bezout's identity, solving ax+by=gcd","Sieve of Eratosthenes — standard sieve",
          "Linear sieve — smallest prime factor table","Segmented sieve — large range prime enumeration",
          "Chinese Remainder Theorem — solve system of congruences","Miller-Rabin primality test — probabilistic",
          "Pollard's rho — integer factorization","Combinatorics — nCr mod p, Pascal's triangle",
          "Lucas' theorem — nCr mod prime","Matrix exponentiation — Fibonacci, linear recurrence",
          "FFT — polynomial multiplication O(n log n)","NTT — FFT mod prime, exact multiplication",
          "Inclusion-Exclusion principle — applications","Catalan numbers — applications and formula",
        ],
        rev:["Modular inverse — both Fermat and ExtGCD","Matrix exponentiation for Fibonacci — implement","CRT: solve 2-equation system on paper","Binary exponentiation: trace 3^13 by hand","Inclusion-exclusion: count integers in [1,n] divisible by 2,3,5"],
        res:["CP-Algorithms Math","Brilliant.org","CSES Problem Set"],
      },
      {
        id:"dsa-adv", title:"Advanced Data Structures", priority:"HIGH", status:"locked", est:"4 weeks",
        pw:"CP Div1 + SDE-2/3 interviews, rare at fresher level",
        sub:[
          "Segment Tree lazy — range assign, range add, range mul","Persistent Segment Tree — versioned, kth smallest online",
          "Merge Sort Tree — count in range, kth element in range","Wavelet Tree — kth smallest in subarray",
          "Heavy-Light Decomposition — path queries on tree","HLD — path update, subtree query",
          "Centroid Decomposition — distance problems on trees","Link-Cut Trees — dynamic tree, path queries",
          "Sqrt decomposition — block queries O(√n)","Mo's algorithm — offline range queries",
          "Mo's on trees — subtree/path queries offline","Sparse Table — RMQ O(1) query, O(n log n) build",
          "Li Chao Tree — line container, CHT online","Segment tree beats — range chmin/chmax",
        ],
        rev:["Lazy segtree: range sum + range assign","Mo's algorithm on array — implement","HLD: implement + verify on CSES","Sparse Table RMQ — implement from scratch","Persistent segtree: kth smallest — trace merge"],
        res:["USACO Guide Advanced","CP-Algorithms","Codeforces EDU"],
      },
      {
        id:"dsa-geo", title:"Computational Geometry", priority:"LOW", status:"locked", est:"2 weeks",
        pw:"Rare in product, occasional in CP Div1-C+",
        sub:[
          "Vector ops — cross product, dot product, magnitude","Line intersection — segment-segment test",
          "Convex Hull — Graham scan","Convex Hull — Jarvis march",
          "Point in polygon — ray casting algorithm","Closest pair — divide and conquer O(n log n)",
          "Rotating calipers — diameter of convex hull","Shoelace formula — polygon area",
          "Sweep line — area of union of rectangles",
        ],
        rev:["Convex hull from scratch in 20 min","Cross product sign → left/right turn intuition","Shoelace formula: derive for a triangle manually"],
        res:["CP-Algorithms Geometry","KACTL"],
      },
    ],
  },
  {
    id:"cp", title:"Competitive Programming", icon:"🏆", accent:"#ff6d00",
    level:"Specialist on CF (~1600) · Knight on LC · AtCoder unrated",
    placement:"Shortlisting filter at FAANG, Jane Street, Citadel, Tower — don't underestimate",
    tracks:[
      {
        id:"cp-expert", title:"CF Expert Grind (1600→1900)", priority:"CRITICAL", status:"in_progress", est:"2–3 months",
        pw:"Expert badge = direct resume filter pass at many companies",
        sub:[
          "Solve 50× Div2-C problems (unseen, strictly timed)","Solve 30× Div2-D problems (unseen, timed)",
          "Participate in 20+ rated CF rounds","Virtual contest every 2 days — Div2 A-D format",
          "Upsolve every problem not solved in-contest","Read editorial within 24h of every contest",
          "Maintain mistake log — categorize by topic/pattern","Implement template library — segtree, BIT, DSU, sparse table",
          "Practice hacking in Div1/Div2 rounds","Time-box strictly: 20/30/40 min per problem tier",
          "Stress test setup — brute + random gen + checker","Rate 1700 → solve Div2-D with 30 min remaining",
          "Identify greedy problems within 5 min — pattern recognition","Solve 10 problems where the trick is mathematical observation",
          "Solve 10 constructive algorithm problems at 1600–1800","Master binary search on answer — 10 problems timed",
          "Solve 10 graph BFS/Dijkstra at Div2-C/D level","Solve 10 DP problems at 1700–1800 rating range",
        ],
        rev:[
          "🔁 WEEKLY: Review WA/TLE root causes from last 3 contests — categorize each",
          "🔁 WEEKLY: Pattern audit — which topics caused majority of fails this week",
          "🔁 WEEKLY: Re-attempt 5 problems you previously gave up on (no editorial)",
          "🔁 WEEKLY: Virtual contest — Div2 full (A-D), strictly timed, alone",
          "🔁 BIWEEKLY: Template library audit — each DS tested on a real problem?",
          "🔁 BIWEEKLY: Greedy drill — 5 greedy problems, explain invariant for each",
          "🔁 BIWEEKLY: Binary search on answer — 3 problems cold, derive monotonicity",
          "🔁 BIWEEKLY: Implementation drill — pick your worst impl topic, do 3 problems",
          "🔁 MONTHLY: Rate change analysis — plot problem difficulty vs time taken",
          "🔁 MONTHLY: Revisit 10 hardest problems you solved — can you explain in 2 min?",
          "🔁 MONTHLY: Mistake log trend — are you repeating the same error class?",
          "🔁 MONTHLY: Stress test your template library with random inputs",
          "🔁 REVISION: Greedy — activity selection, exchange argument proof",
          "🔁 REVISION: Math observation problems — re-read 5 editorials for insight",
          "🔁 REVISION: Constructive — re-derive 3 constructions without hints",
          "🔁 REVISION: All failed problems in last 20 contests — upsolve batch",
        ],
        res:["Codeforces Problem Ladder","A2OJ (archived)","CLIST.by for tracking"],
      },
      {
        id:"cp-cm", title:"CF Candidate Master Push (1900→2100)", priority:"CRITICAL", status:"locked", est:"4–6 months",
        pw:"CM = serious algorithmic signal, opens quant/HFT firm doors",
        sub:[
          "Solve 30× Div1-B problems cold","Solve 15× Div1-C problems (upsolve allowed)",
          "Participate in 30+ rounds at Expert level","Master constructive algorithms — invariant/pigeonhole tricks",
          "Flows + matching — max flow, Hopcroft-Karp, Hungarian","ICPC-style simulation — 3-person, 5 problems, 3h",
          "AtCoder ABC: solve F consistently (reach 1600+)","AtCoder ARC: solve C consistently",
          "LeetCode Weekly/Biweekly — target consistent top 300","Analyze top 100 solutions on every contest problem",
          "Code review: compare your AC with tourist/Um_nik","All CSES problems in relevant categories",
          "Network flows — max flow, min cut, Ford-Fulkerson, Dinic's","Matching — bipartite matching, König's theorem",
          "Game theory — Sprague-Grundy theorem, Nim, Grundy values","Probability DP — expected value on DAG/graph",
          "Solve 20 problems requiring combinatorial identity insight","Segment tree with lazy — 5 problems Div1-B level",
        ],
        rev:[
          "🔁 WEEKLY: Pattern audit — graph/flow/matching breakdowns",
          "🔁 WEEKLY: Re-read editorials of all unsolved Div1-A/B from last 2 contests",
          "🔁 WEEKLY: Virtual contest: Div1 A+B, strictly timed",
          "🔁 WEEKLY: Compare accepted code with top-rated solution — note differences",
          "🔁 BIWEEKLY: Template library audit — flows, matching, game theory battle-tested?",
          "🔁 BIWEEKLY: Constructive drill — 5 problems, derive from invariant/parity/pigeonhole",
          "🔁 BIWEEKLY: Flows — implement Dinic's from scratch, verify on CSES",
          "🔁 BIWEEKLY: Sprague-Grundy — compute Grundy values for 3 game variants",
          "🔁 MONTHLY: All CSES uncompleted problems — batch upsolve",
          "🔁 MONTHLY: AtCoder ARC upsolve — 10 C-level problems",
          "🔁 MONTHLY: Tourist/Um_nik solution study — pick 5, annotate each",
          "🔁 MONTHLY: Probability DP: expected turns for 3 different game setups",
          "🔁 REVISION: Dinic's max flow — trace on a 5-node graph",
          "🔁 REVISION: Bipartite matching — König's theorem proof sketch",
          "🔁 REVISION: Sprague-Grundy for impartial games — 3 game examples",
          "🔁 REVISION: Heavy constructive — write proof sketch before coding",
        ],
        res:["Codeforces EDU","USACO Platinum","AtCoder Problems (kenkoooo)"],
      },
      {
        id:"cp-lc", title:"LeetCode — OA & Interview Focused", priority:"CRITICAL", status:"in_progress", est:"Ongoing",
        pw:"Every OA uses LC-style — this is your primary filter",
        sub:[
          "NeetCode 150 — complete + verify all solved","Blind 75 — complete + verify all solved",
          "Striver SDE Sheet — all 191 problems","Amazon OA top 50 problems",
          "Google OA top 50 problems","Microsoft OA top 30 problems",
          "Goldman Sachs / quant-style problems","Participate every LC Weekly Contest",
          "Participate every LC Biweekly Contest","LC Premium: mock interviews (Meta, Google sets)",
          "Speed drills — 10 easies under 5 min each","Simulate OA: 2 problems, 90 min, no internet",
          "Solve 20 LC Hards (variety of topics)","Company-wise: Flipkart, Uber, Adobe top 30 each",
          "Sliding window — all LC medium/hard variants","Two pointers — all LC medium/hard variants",
          "DP — all Blind 75 DP problems solved twice","Graph — all NeetCode graph problems cold",
          "Heap/Priority Queue — top-K, merge K sorted, median stream","Intervals — merge, insert, non-overlapping variants",
        ],
        rev:[
          "🔁 WEEKLY: Redo 5 LC mediums you've done before — can you do them in <15 min?",
          "🔁 WEEKLY: OA simulation — 2 random mediums, 90 min, no tabs",
          "🔁 WEEKLY: Speed drill — 5 easies timed, all under 5 min",
          "🔁 WEEKLY: One LC Hard — attempt 30 min then study optimal solution",
          "🔁 BIWEEKLY: Redo all Blind 75 hards — time each, flag slow ones",
          "🔁 BIWEEKLY: Company OA bank — 5 Amazon/Google style problems timed",
          "🔁 BIWEEKLY: Worst topic drill — pick weakest category, do 5 problems",
          "🔁 BIWEEKLY: Redo all problems where first attempt took >40 min",
          "🔁 MONTHLY: Full NeetCode 150 audit — any topic below 80% solve rate?",
          "🔁 MONTHLY: Mock interview: 1 problem, 45 min, verbalize thought process",
          "🔁 MONTHLY: All first-attempt failures — batch redo without notes",
          "🔁 MONTHLY: OA simulation — 2 problems, strict 90 min, score yourself",
          "🔁 REVISION: DP patterns — coin change, LCS, edit distance all from scratch",
          "🔁 REVISION: Graph BFS/DFS problems — 3 each, no hints",
          "🔁 REVISION: Binary search — 5 'binary search on answer' problems",
          "🔁 REVISION: Sliding window — 3 variable-size problems cold",
        ],
        res:["NeetCode.io","LeetCode","Striver Sheet — takeuforward.org"],
      },
      {
        id:"cp-atcoder", title:"AtCoder Track", priority:"MEDIUM", status:"available", est:"Ongoing",
        pw:"Strong signal for algorithmic roles + quant firms",
        sub:[
          "Register + participate in weekly ABCs","ABC: solve A-E consistently (<90 min)",
          "ABC: attempt F — reach Expert equiv (1600+)","ARC: solve A-B consistently",
          "ARC: solve C consistently (target)","AGC: upsolve A after every contest",
          "Complete Educational DP Contest — all 26 problems","Virtual ABC × 10 for speed training",
          "ABC D-level: all DP, graph, math patterns","ABC E-level: segtree, BIT, binary search on answer",
          "ARC B-level: constructive, math, graph","Upsolve all skipped ABC-F from last 20 contests",
        ],
        rev:[
          "🔁 WEEKLY: Upsolve all problems you failed in last ABC/ARC",
          "🔁 WEEKLY: Virtual ABC — A-E timed, score yourself",
          "🔁 BIWEEKLY: ABC D-E batch — 5 unseen problems from problem archive",
          "🔁 BIWEEKLY: AGC-A upsolve — common pattern is constructive reasoning",
          "🔁 MONTHLY: EDU DP Contest — re-attempt any problem <A grade",
          "🔁 MONTHLY: AtCoder rating audit — which problem level causes most drops?",
          "🔁 REVISION: ABC-F patterns — segtree, DP on DAG, sqrt decomp",
          "🔁 REVISION: ARC-C constructive — re-read 5 editorials for proof style",
        ],
        res:["AtCoder Problems (kenkoooo.com)","AtCoder EDU DP Contest"],
      },
      {
        id:"cp-strategy", title:"Contest Strategy & Mental Systems", priority:"HIGH", status:"available", est:"Ongoing",
        pw:"Separates equal-rated performers under contest pressure",
        sub:[
          "Read all problems first (2 min each) before coding","20-30-40 rule — if stuck > N min, move on",
          "Template library — modular, tested, paste < 5 sec","Mistake log — WA/TLE/MLE by root cause category",
          "Pre-contest warm-up — 2 easy problems to get in flow","Post-contest ritual: upsolve + editorial + log",
          "Stress test every non-trivial solution before submit","Typing speed ≥70 WPM — smooth code implementation",
          "Fast I/O — always use in C++ (sync_with_stdio, cin.tie)","Mental math — mod arithmetic quick calculations",
          "Rating ≠ effort fallacy — contest performance analytics","Identify problem type in < 2 min — pattern radar",
          "Wrong answer debugging — checklist: overflow, off-by-one, edge cases","Contest environment simulation — same time, same conditions",
          "Performance under pressure — cold solving vs practiced",
        ],
        rev:[
          "🔁 WEEKLY: Audit template library — each piece tested on a real problem?",
          "🔁 WEEKLY: Review mistake log — what error class recurred this week?",
          "🔁 WEEKLY: Timed type-speed drill — 70+ WPM, code a known algorithm",
          "🔁 BIWEEKLY: Simulate contest environment — alone, timed, no hints",
          "🔁 BIWEEKLY: Pattern recognition drill — read 10 problem statements, classify each",
          "🔁 MONTHLY: Full performance analytics — rating delta, problems per hour, WA rate",
          "🔁 MONTHLY: Template library stress test — random edge cases on each DS",
          "🔁 REVISION: Fast I/O — write from memory, verify it compiles",
          "🔁 REVISION: Overflow checklist — 5 historical bugs you hit, trace root cause",
        ],
        res:["Errichto YouTube","Tourist CF blog","Benq's CF page"],
      },
    ],
  },
  {
    id:"webdev", title:"Web Dev & Backend", icon:"🌐", accent:"#7c4dff",
    level:"Next.js projects done · WebRTC/Golang incomplete · No microservices yet",
    placement:"SWE internships, full-stack + backend SDE roles — biggest project differentiator",
    tracks:[
      {
        id:"web-html", title:"HTML — Deep Foundations", priority:"HIGH", status:"available", est:"1 week",
        pw:"Baseline for all frontend roles — gaps here are embarrassing in interviews",
        sub:[
          "Semantic HTML5 — article, section, aside, nav, main, header, footer, figure","Document structure — DOCTYPE, html, head, body, meta charset, viewport",
          "Forms — input types (text, email, number, date, file, radio, checkbox, range)","Form attributes — required, pattern, min, max, step, placeholder, autocomplete",
          "Form elements — fieldset, legend, label (for + id), datalist, select, optgroup","HTML entities — &amp;, &lt;, &gt;, &nbsp;, &copy; and when to use them",
          "Accessibility — ARIA roles, aria-label, aria-describedby, aria-hidden","Accessibility — tabindex, keyboard navigation, focus management",
          "Media elements — img (srcset, sizes, loading=lazy, alt), picture element","Audio + video — controls, autoplay, loop, muted, source, track (captions)",
          "Tables — thead, tbody, tfoot, th (scope), colspan, rowspan","Lists — ol, ul, dl (definition list), nested lists",
          "Links — href, target, rel (noopener, noreferrer, canonical)","Metadata — og:title, og:image, og:description, twitter:card",
          "Canvas element — 2D context basics","SVG inline — basic shapes, viewBox, path, use element",
          "Web storage HTML side — localStorage vs sessionStorage (concept)","Iframes — sandbox attribute, allow, loading=lazy",
          "Custom data attributes — data-*, reading with dataset in JS","Template element + slot (Web Components basics)",
          "HTML validation — W3C validator, common errors","Performance hints — preload, prefetch, preconnect link rel",
        ],
        rev:[
          "Write a fully accessible form with proper labels, ARIA, and error states",
          "Implement responsive image with srcset + sizes for 3 breakpoints",
          "Create a semantic article page: correct heading hierarchy, nav, aside, footer",
          "Build a table with merged cells, caption, and proper th scope attributes",
          "Add Open Graph + Twitter Card meta to an HTML document",
          "Identify all ARIA mistakes in a given snippet of HTML",
          "Picture element with WebP + JPEG fallback for different screen widths",
          "Explain difference: section vs div vs article — use each correctly in one page",
        ],
        res:["MDN HTML Reference","web.dev Learn HTML","HTML5 Doctor"],
      },
      {
        id:"web-css", title:"CSS — Complete Mastery", priority:"HIGH", status:"available", est:"2 weeks",
        pw:"Heavily tested in frontend interviews — many engineers are weak here",
        sub:[
          "Box model — content, padding, border, margin, box-sizing border-box","Display — block, inline, inline-block, none, contents",
          "Flexbox — flex-direction, justify-content, align-items, align-self, flex-wrap, flex-grow/shrink/basis","Flexbox — order, gap, align-content, flex shorthand",
          "CSS Grid — grid-template-columns/rows, fr unit, repeat(), minmax()","Grid — grid-area, named areas, auto-fill vs auto-fit, dense",
          "Grid — place-items, place-content, span keyword, implicit grid","Positioning — static, relative, absolute, fixed, sticky, z-index stacking context",
          "Selectors — descendant, child (>), adjacent (+), sibling (~)","Pseudo-classes — :hover, :focus, :focus-visible, :nth-child, :not, :is, :where, :has",
          "Pseudo-elements — ::before, ::after, ::placeholder, ::selection","Specificity — inline > ID > class > element, !important implications",
          "CSS Variables (custom properties) — --var, var(), fallback values","CSS cascade — origin, specificity, order, inheritance",
          "Typography — font-size (clamp), line-height, letter-spacing, font-display, @font-face","Color — hex, rgb, hsl, oklch, color-mix(), contrast-color()",
          "Transitions — property, duration, timing-function, delay","Animations — @keyframes, animation shorthand, fill-mode, iteration-count",
          "Transform — translate, scale, rotate, skew, perspective, transform-origin","Responsive design — media queries (min-width), container queries, viewport units (svh, dvh)",
          "Overflow — hidden, scroll, auto, clip, text-overflow ellipsis","Clip-path, mask, filter (blur, drop-shadow), backdrop-filter",
          "CSS logical properties — margin-inline, padding-block","Scroll behavior — scroll-snap, scroll-margin, scroll-padding",
          "CSS nesting — native nesting syntax","Layers (@layer) — ordering cascade layers",
          "Print styles — @media print, page-break","Dark mode — prefers-color-scheme, color-scheme property",
          "Accessibility — focus styles, reduced motion (prefers-reduced-motion)","CSS performance — will-change, contain, composite layers",
        ],
        rev:[
          "Build a responsive navbar: flexbox, hamburger menu, sticky, z-index",
          "CSS Grid layout: 12-column grid, sidebar + content + aside, responsive collapse",
          "Recreate a loading spinner with pure CSS animation — no JS",
          "Fix a specificity conflict: explain cascade resolution step by step",
          "Implement a card hover effect with transform + transition + pseudo-elements",
          "Build a responsive typography scale using clamp()",
          "Container queries: sidebar that changes layout based on its own width",
          "Create a dark mode toggle using CSS variables only",
          "Stacking context: create a z-index bug then fix it — explain root cause",
          "Position sticky: make a table header sticky, explain why it might not work",
        ],
        res:["CSS Tricks Complete Guide to Flexbox/Grid","web.dev Learn CSS","Josh Comeau CSS courses"],
      },
      {
        id:"web-js", title:"JavaScript — Deep Mastery", priority:"CRITICAL", status:"available", est:"3 weeks",
        pw:"Core of every frontend/full-stack interview — no shortcuts here",
        sub:[
          "Data types — primitives vs objects, typeof, instanceof, null vs undefined","Type coercion — == vs ===, truthy/falsy, implicit conversion gotchas",
          "Variables — var (hoisting, function scope), let/const (block scope, TDZ)","Functions — declarations, expressions, arrow functions, this binding differences",
          "Closures — definition, use cases, memory implications, closure in loops","Scope chain — lexical scope, scope lookup, global vs local",
          "Prototype chain — __proto__, Object.prototype, prototype inheritance","ES6 Classes — class syntax, constructor, extends, super, static, private (#)",
          "this keyword — global, method, arrow function, call/apply/bind, new","Destructuring — array, object, nested, default values, rest in destructuring",
          "Spread & rest — in function args, array/object merging, cloning","Template literals — tagged templates, multiline, expression interpolation",
          "Iterables & iterators — Symbol.iterator, for...of, custom iterables","Generators — function*, yield, next(), return(), throw(), lazy evaluation",
          "Promises — resolve/reject, .then/.catch/.finally, chaining, error propagation","async/await — syntax, try/catch, parallel with Promise.all/race/allSettled/any",
          "Event loop — call stack, task queue, microtask queue, execution order","setTimeout/setInterval — why they're not precise, clearing, minimum delay",
          "Event handling — addEventListener, event object, stopPropagation, preventDefault","Event delegation — bubbling, capturing, target vs currentTarget",
          "DOM manipulation — querySelector, createElement, appendChild, innerHTML vs textContent","DOM traversal — parentElement, children, nextSibling, closest",
          "Fetch API — GET/POST, headers, Response methods, error handling","AbortController — cancel fetch, timeout pattern",
          "Web Workers — postMessage, communication, use cases","Service Workers — install/activate/fetch events, cache API basics",
          "Modules — ESM import/export, dynamic import(), named vs default","CommonJS vs ESM differences — require, module.exports",
          "Error handling — try/catch/finally, custom Error classes, error types","Symbols — Symbol(), Symbol.iterator, well-known symbols",
          "WeakMap / WeakSet — use cases, garbage collection, vs Map/Set","Proxy & Reflect — traps (get, set, has), use cases in frameworks",
          "Immutability patterns — Object.freeze, structuredClone, spread patterns","Functional patterns — map, filter, reduce, compose, curry",
          "Memory leaks — common causes: closures, detached DOM, forgotten listeners","Performance — debounce, throttle, requestAnimationFrame, IntersectionObserver",
        ],
        rev:[
          "Implement Promise.all from scratch without using Promise.all",
          "Explain event loop: trace execution order of 5-line async code with mixed promises/setTimeout",
          "Build a debounce and throttle function from scratch",
          "Explain prototype chain: draw Object → Animal → Dog with property lookup",
          "Write a custom iterable class that yields fibonacci numbers",
          "Implement a simple event emitter (on, emit, off) from scratch",
          "Closure in loop bug: explain why, show 3 different fixes",
          "this binding: predict output for 5 different invocation contexts",
          "Implement curry() function — handle partial application",
          "Build a simple observable/reactive system using Proxy",
        ],
        res:["You Don't Know JS (book series — free)","javascript.info","MDN JavaScript"],
      },
      {
        id:"web-ts", title:"TypeScript — Full Mastery", priority:"HIGH", status:"available", est:"2 weeks",
        pw:"Expected at all product companies for frontend/full-stack roles",
        sub:[
          "Types — primitives, unions, intersections, tuples","Interfaces vs type aliases — when each",
          "Generics — functions, classes, constraints, defaults","Conditional types — extends, infer, distributive",
          "Mapped types — Partial, Required, Readonly, Pick, Omit, Record","Template literal types — string manipulation types",
          "Utility types — ReturnType, Parameters, InstanceType, Awaited","Discriminated unions + exhaustive switch checks",
          "Zod — schema, parse, safeParse, infer type","tRPC — router, procedure, context, middleware, client",
          "Strict mode — fix all errors, no any","Declaration files (.d.ts) — write + consume",
          "Type narrowing — typeof, instanceof, in, is","Branded types — prevent wrong type substitution",
          "Variance — covariance, contravariance in function types","Module augmentation — extend third-party types",
          "satisfies operator — vs as, vs type annotation","const assertion — as const, readonly inference",
        ],
        rev:[
          "Implement type-safe Event Emitter with generics",
          "Recreate Partial, Readonly, Required, Pick, Omit from scratch",
          "Build Zod schema for a complex nested form with discriminated union",
          "Write a generic fetchWithSchema<T>(url, schema: ZodSchema<T>) function",
          "Explain variance: why is (x: Dog) => void not assignable to (x: Animal) => void?",
          "Branded types: implement UserId and OrderId that can't be swapped",
          "Conditional type: implement DeepReadonly<T> recursively",
          "satisfies vs as — give an example where each behaves differently",
        ],
        res:["Total TypeScript (Matt Pocock)","TypeScript Deep Dive","tRPC Docs"],
      },
      {
        id:"web-react", title:"React — Production Mastery", priority:"CRITICAL", status:"available", est:"3 weeks",
        pw:"Most in-demand frontend skill — tested deeply in all product company interviews",
        sub:[
          "JSX — transpilation, expressions, fragments, keys","Functional components — props, default props, prop types",
          "useState — state updates, batching (React 18), functional updates","useEffect — dependencies, cleanup, when to avoid, strict mode double-invoke",
          "useRef — DOM refs, mutable values, forwardRef","useMemo + useCallback — when to use, when they hurt, referential equality",
          "useContext — create, provide, consume, performance issues","useReducer — reducer pattern, action types, vs useState",
          "Custom hooks — rules of hooks, extracting logic, naming","useLayoutEffect — vs useEffect, measurement pattern",
          "useTransition + useDeferredValue — concurrent features","useId — accessibility, SSR-stable IDs",
          "React 18 — automatic batching, concurrent mode, Suspense improvements","Suspense — data fetching (React 19), lazy loading, fallback",
          "Error Boundaries — componentDidCatch, fallback UI, reset","React.memo — shallow comparison, when it helps/hurts",
          "Reconciliation — diffing algorithm, key importance, fiber architecture (conceptual)","Controlled vs uncontrolled components — when each",
          "Event handling — synthetic events, event pooling (legacy), bubbling","Forms — controlled inputs, form libraries (react-hook-form)",
          "Lists — key prop importance, dynamic keys anti-pattern","Portals — createPortal, use cases (modals, tooltips)",
          "Compound components pattern — shared state via context","Render props pattern — vs hooks",
          "HOC pattern — when still relevant","State management — Zustand, Jotai, context + reducer patterns",
          "React Query / TanStack Query — queries, mutations, cache, stale time","React Router v6 — Routes, loader, action, useNavigate, useParams",
          "Performance — React DevTools profiler, avoiding re-renders","Code splitting — React.lazy, dynamic import, suspense boundary",
          "Testing — React Testing Library, render, userEvent, waitFor, queries","Storybook basics — component isolation, stories, controls",
        ],
        rev:[
          "Build a counter with useReducer — explain why over useState",
          "Trace re-render propagation through a component tree — mark which components re-render",
          "Build a custom useDebounce hook from scratch",
          "Implement an infinite scroll list using IntersectionObserver + React Query",
          "Create a compound component (Tabs) with shared state via context",
          "Explain React reconciliation: why keys matter — show bug with index keys",
          "Build a form with react-hook-form + Zod validation",
          "useEffect cleanup: write 3 examples that require cleanup, explain each leak",
          "useMemo anti-pattern: write example where useMemo makes perf worse",
          "Portals: implement a modal that renders outside root but handles events correctly",
        ],
        res:["React Official Docs (react.dev)","TkDodo React Query Blog","ByteGrad React YouTube"],
      },
      {
        id:"web-next", title:"Next.js — Production Grade", priority:"HIGH", status:"in_progress", est:"3 weeks",
        pw:"Most common frontend ask in SWE internship rounds",
        sub:[
          "App Router — RSC, Client Components, when each","Suspense boundaries + streaming with loading.tsx",
          "Server Actions — mutations, optimistic updates, revalidation","Route Handlers — API routes in App Router",
          "Data fetching — parallel, sequential, waterfall avoidance","ISR / SSG / SSR / PPR — trade-offs, when to use",
          "Next.js caching — fetch cache, unstable_cache, revalidatePath, revalidateTag","Middleware — auth guards, redirects, edge runtime",
          "Parallel Routes + Intercepting Routes — modal patterns","Metadata API — SEO, open graph, twitter card",
          "next/image — optimization, formats, sizes, lazy","next/font — self-hosted, variable fonts",
          "Multi-zone architecture — microfrontend approach","Docker — multi-stage Dockerfile for Next.js production",
          "Vercel edge config + feature flags","Testing — Jest + React Testing Library + Playwright E2E",
        ],
        rev:[
          "Build a mini app using ONLY server components — no 'use client' at all",
          "Trace cache invalidation flow in an ISR page from data change to revalidation",
          "Middleware auth flow — trace execution order through 3 middleware checks",
          "Server Actions: form + optimistic UI from scratch, without any library",
          "Explain: when does a Server Component become a Client Component boundary?",
          "PPR vs ISR vs SSR — give a concrete use case where each is optimal",
          "Parallel routes: build a dashboard with slot-based layout",
          "revalidatePath vs revalidateTag — when would you choose each?",
        ],
        res:["Next.js Docs","Lee Robinson Blog","Theo (t3.gg) YouTube"],
      },
      {
        id:"web-go", title:"Golang Backend — Complete", priority:"CRITICAL", status:"in_progress", est:"4 weeks",
        pw:"Backend SWE intern + SDE roles — Go extremely common in Indian product companies",
        sub:[
          "Types, structs, methods, interfaces — Go fundamentals","Pointers — value vs pointer receivers",
          "Error handling — errors.Is, errors.As, wrapping, sentinel errors","Goroutines — lifecycle, data races, goroutine leaks",
          "Channels — buffered, unbuffered, directional, close","Select statement — multiplexing, non-blocking, timeout",
          "sync — Mutex, RWMutex, WaitGroup, Once, atomic","Context — cancellation, timeout, value propagation, done channel",
          "net/http — Handler, ServeMux, middleware chain","Chi router — routing, sub-routers, URL params, middleware",
          "REST API design — versioning, idempotency, status codes","JSON — encoding/json, struct tags, custom marshaler/unmarshaler",
          "PostgreSQL with pgx v5 — query, scan, transactions","sqlc — write SQL, generate type-safe Go code",
          "golang-migrate — migration files, up/down","Testing — table-driven, testify/assert, httptest.NewRecorder",
          "Benchmarks — go test -bench, pprof CPU/memory","Graceful shutdown — os.Signal, context + WaitGroup",
          "Multi-stage Dockerfile for Go production image","Config management — viper / envconfig / godotenv",
        ],
        rev:[
          "Goroutine leak patterns — identify and fix 3 different leak scenarios",
          "Build HTTP server from scratch — no framework, just net/http",
          "Context chain through 3 middleware — trace cancellation propagation",
          "sqlc: generate + use in handler end-to-end from SQL file to HTTP response",
          "Implement a worker pool with channels and WaitGroup",
          "Race condition: write a racy program, detect with -race, fix with Mutex",
          "Interface satisfaction: write an interface, 3 implementations, polymorphic dispatch",
          "Graceful shutdown: write complete signal handling + WaitGroup drain pattern",
        ],
        res:["Go by Example","Jon Calhoun Gophercises","Ardan Labs Ultimate Go"],
      },
      {
        id:"web-webrtc", title:"WebRTC — Complete the Project", priority:"CRITICAL", status:"in_progress", est:"4 weeks",
        pw:"Project differentiator — very few interns have real WebRTC experience",
        sub:[
          "WebRTC architecture — P2P vs SFU vs MCU trade-offs","SDP — offer/answer model, session description format",
          "ICE — candidate types (host, srflx, relay), gathering","STUN — NAT traversal, binding request/response",
          "TURN — relay fallback, coturn server setup on VPS","RTCPeerConnection — full lifecycle: create → offer → ICE → connect",
          "getUserMedia — camera, microphone, screen capture","MediaStream — tracks, clone, add/remove, constraints",
          "Data channels — ordered/unordered, reliable/unreliable, SCTP","Signaling server — Go + gorilla/websocket",
          "Room management — join, leave, broadcast to room","Pion WebRTC library — peer connection, track, data channel",
          "Pion — SFU: subscribe to remote tracks, forward to peers","Pion — recording media to disk (.ivf, .ogg)",
          "ICE restart — reconnection on network change","TURN server — deploy coturn, configure credentials",
          "Frontend hooks — React custom hook for peer connection","Next.js + WebRTC — full integration",
          "Debug WebRTC — chrome://webrtc-internals, stats API","Deploy: signaling + TURN + Next.js all together",
        ],
        rev:[
          "Whiteboard: SDP offer/answer exchange end-to-end without notes",
          "Whiteboard: ICE gathering + trickle ICE flow — all candidate types",
          "Full call setup trace: STUN → signal → connect → media flowing",
          "Implement signaling server in Go from scratch — no looking at code",
          "Explain difference: STUN vs TURN — when does STUN fail?",
          "Data channel: implement a reliable file transfer over RTCDataChannel",
          "SFU architecture: draw it, explain track subscription model",
          "ICE restart: when does it trigger, what SDP fields change?",
        ],
        res:["WebRTC for the Curious (free book)","Pion examples GitHub","fireship.io WebRTC"],
      },
      {
        id:"web-system", title:"System Design — Interview Ready", priority:"CRITICAL", status:"available", est:"5 weeks",
        pw:"Mandatory for SDE-1 placements, asked in some intern interviews too",
        sub:[
          "Scalability — vertical vs horizontal, stateless design","Load balancers — L4 vs L7, round robin, least connections, consistent hash",
          "CDN — edge caching, cache invalidation strategies","DNS — resolution, TTL, anycast, GeoDNS",
          "SQL vs NoSQL — selection criteria, 5 factors","Indexing — B-tree, hash, composite, covering, when NOT to index",
          "Sharding — range, hash, directory-based, hotspot issues","Replication — master-slave, master-master, quorum reads",
          "CAP theorem — concrete examples for each combo","ACID vs BASE — real DB examples for each",
          "Caching — Redis, Memcached, CDN, write-through, write-behind, LRU","Message queues — Kafka, RabbitMQ, SQS — when each",
          "Rate limiting — token bucket, leaky bucket, sliding window log/counter","Consistent hashing — ring, virtual nodes, load distribution",
          "API Gateway — auth, rate limiting, routing, circuit breaking","Design: URL Shortener (TinyURL)",
          "Design: Twitter / News Feed (fanout on write/read)","Design: WhatsApp / Chat with WebSocket",
          "Design: YouTube — upload, process, stream","Design: Uber — real-time matching, geo-indexing",
          "Design: Notification System — push/email/SMS at scale","Design: Search Autocomplete — trie + ranking",
          "Design: Distributed Cache — Redis cluster","Design: Rate Limiter — distributed sliding window",
          "Design: File Storage (Dropbox/S3) — chunking, dedup","Design: Web Crawler",
        ],
        rev:[
          "TinyURL end-to-end whiteboard in 30 min — estimate QPS, choose DB, design API",
          "Twitter feed with caching — whiteboard 45 min, compare fanout on write vs read",
          "CAP theorem: give 3 real DB examples for each combo (CA, CP, AP)",
          "Consistent hashing ring: derive from scratch on paper, add virtual nodes",
          "WhatsApp design: focus on message delivery guarantee and offline handling",
          "Rate limiter: implement token bucket in Redis with Lua script logic",
          "YouTube: focus on video chunking, storage tiers, CDN distribution",
          "Uber: explain geo-indexing — why Quad Trees, how driver location update works",
        ],
        res:["ByteByteGo (Alex Xu Book + YouTube)","Grokking System Design","Exponent SD course"],
      },
      {
        id:"web-micro", title:"Microservices Architecture", priority:"HIGH", status:"locked", est:"5 weeks",
        pw:"Backend SWE full-time + senior intern roles at product companies",
        sub:[
          "Monolith vs microservices — trade-offs, when to migrate","Domain-Driven Design — bounded contexts, aggregates, ubiquitous language",
          "Service decomposition — by business capability, subdomain","Sync communication — REST + gRPC between services",
          "Async communication — Kafka events, event-driven patterns","API Gateway — Kong, Traefik, custom Go gateway",
          "Service discovery — Consul, Kubernetes DNS","CQRS — command vs query separation, eventual consistency",
          "Event Sourcing — event store, rebuilding state, snapshots","Saga pattern — choreography vs orchestration, rollback",
          "2-phase commit vs eventual consistency — trade-offs","Circuit breaker — closed/open/half-open state machine",
          "Bulkhead pattern — resource isolation between services","Distributed tracing — OpenTelemetry + Jaeger",
          "Centralized logging — ELK stack, correlation IDs","Service mesh — Istio/Linkerd (conceptual understanding)",
          "Build: User + Order + Notification services with Kafka","Build: API Gateway in Go routing to all 3 services",
        ],
        rev:[
          "Saga vs 2PC — explain with order payment failure example",
          "Circuit breaker state machine — draw all 3 states + transitions",
          "Event sourcing: rebuild user balance from event log — trace 5 events",
          "DDD bounded contexts: decompose an e-commerce app into 4 services",
          "CQRS: explain why you'd separate read/write models, give concrete example",
        ],
        res:["Sam Newman 'Building Microservices'","roadmap.sh/backend","Hussein Nasser YouTube"],
      },
      {
        id:"web-devops", title:"Docker, Kubernetes & CI/CD", priority:"HIGH", status:"available", est:"3 weeks",
        pw:"Expected for backend SWE, strong differentiator at intern level",
        sub:[
          "Docker — images, containers, layers, union filesystem","Dockerfile — multi-stage builds, minimize image size",
          "Docker networking — bridge, host, overlay","Docker volumes — bind mounts vs named volumes",
          "Docker Compose — multi-service: app + postgres + redis","Kubernetes — pods, nodes, cluster architecture",
          "Deployments — rolling update, rollback strategy","Services — ClusterIP, NodePort, LoadBalancer, ExternalName",
          "Ingress — routing, TLS termination, path-based routing","ConfigMaps & Secrets — env injection",
          "Persistent Volumes + PVCs","Helm charts — templates, values.yaml, release management",
          "GitHub Actions — CI: lint + test + build + push image","GitHub Actions — CD: deploy to k8s on merge",
          "Prometheus — metrics scraping, custom metrics in Go","Grafana — dashboards, alerts",
          "Structured logging — JSON logs, trace ID, correlation","Loki — log aggregation with Grafana",
        ],
        rev:[
          "Multi-stage Dockerfile for Go — write from scratch, verify build size",
          "Docker Compose: Go + Postgres + Redis — from scratch, health checks included",
          "GitHub Actions pipeline — build + push Docker image + deploy on PR merge",
          "Kubernetes: explain pod → deployment → service → ingress chain",
          "Explain difference: ConfigMap vs Secret — when is each appropriate?",
        ],
        res:["TechWorld with Nana (YouTube)","KodeKloud","roadmap.sh/devops"],
      },
      {
        id:"web-db", title:"Databases — Deep Dive", priority:"HIGH", status:"available", est:"3 weeks",
        pw:"Asked in every backend interview — don't underestimate",
        sub:[
          "PostgreSQL — data types, constraints, schema design","SQL — joins (all 6 types), subqueries, EXISTS vs IN",
          "Window functions — ROW_NUMBER, RANK, LEAD, LAG, SUM OVER","CTEs — WITH clause, recursive CTEs",
          "Indexing — B-tree, hash, partial, composite, covering","EXPLAIN ANALYZE — reading seq scan, index scan, cost",
          "Transactions — BEGIN/COMMIT/ROLLBACK, savepoints","Isolation levels — read uncommitted → serializable, each with example",
          "MVCC — how Postgres handles concurrent reads/writes","Connection pooling — pgBouncer, why it matters",
          "Redis — strings, lists, sets, sorted sets, hashes, bit ops","Redis pub/sub — subscribe, publish, channels",
          "Redis streams — producer/consumer groups","Redis as cache — TTL, LRU/LFU eviction, cache aside",
          "Redis as queue — LPUSH/BRPOP reliable queue pattern","MongoDB — documents, collections, aggregation pipeline",
          "Database normalization — 1NF, 2NF, 3NF, BCNF with examples","Denormalization — when and why",
          "Time-series — TimescaleDB basics, hypertables",
        ],
        rev:[
          "Write query using 3 different window functions on a single dataset",
          "MVCC — concurrent transaction example: trace read/write under serializable",
          "Redis sorted set — implement leaderboard from scratch with score update",
          "Design normalized e-commerce schema: users, products, orders, order_items",
          "Isolation levels: write a dirty read scenario and explain which level prevents it",
          "Recursive CTE: generate a path in a hierarchy table",
          "EXPLAIN ANALYZE: given a slow query, identify the bottleneck and add correct index",
        ],
        res:["Hussein Nasser DB Course","Use The Index, Luke","Redis University (free)"],
      },
      {
        id:"web-api", title:"API Protocols & Patterns", priority:"MEDIUM", status:"available", est:"2 weeks",
        pw:"Relevant for all backend SWE roles",
        sub:[
          "REST — 6 constraints, Richardson Maturity Model","REST best practices — versioning (URL vs header), pagination, errors",
          "OpenAPI / Swagger — write spec, generate client + server","gRPC — proto file, service def, unary + streaming modes",
          "Protocol Buffers — encoding, field numbers, backward compat","GraphQL — schema, resolvers, mutations, subscriptions",
          "GraphQL — N+1 problem, DataLoader batching","WebSockets — upgrade handshake, full-duplex, heartbeat",
          "Server-Sent Events — EventSource, one-way streaming","Long polling vs SSE vs WebSocket — when each",
        ],
        rev:[
          "Implement gRPC server + client in Go with a simple service",
          "Explain N+1 problem with code, then fix it with DataLoader",
          "When WebSocket vs SSE vs polling — decision tree with 3 scenarios",
          "REST: design a paginated API (cursor vs offset) — pros/cons of each",
          "Protobuf backward compatibility: what breaks when you add/remove a field?",
        ],
        res:["gRPC official docs","The Guild (GraphQL)","Hussein Nasser protocols"],
      },
      {
        id:"web-security", title:"Security & Auth", priority:"MEDIUM", status:"locked", est:"2 weeks",
        pw:"Asked in internship interviews, mandatory for production code",
        sub:[
          "OWASP Top 10 — each with example attack + fix","SQL injection — parameterized queries, ORM protection",
          "XSS — stored, reflected, DOM-based — CSP headers","CSRF — tokens, SameSite cookie attribute",
          "JWT — structure (header.payload.sig), signing, refresh tokens","JWT pitfalls — none alg, weak secret, no expiry",
          "OAuth 2.0 — all 4 grant types with diagrams","OpenID Connect — ID token, userinfo endpoint",
          "Session management — cookie flags: httpOnly, secure, SameSite","HTTPS/TLS — handshake simplified, certificate chain, HSTS",
          "Secret management — .env hygiene, Vault, never commit","Rate limiting — DDoS protection at API gateway",
          "CORS — preflight, allowed origins, credentials","Content Security Policy — directives, nonces",
        ],
        rev:[
          "OAuth2 auth code flow — trace end-to-end without notes",
          "5 ways a JWT can be insecure — enumerate each with attack scenario",
          "OWASP top 3 — write code example for attack + fix for each",
          "CSRF attack: trace a full attack scenario, explain why SameSite=Strict prevents it",
          "XSS: explain stored vs reflected, write unsafe code example then fix with CSP",
        ],
        res:["OWASP","PortSwigger Web Academy","Auth0 Blog"],
      },
    ],
  },
  {
    id:"placement", title:"Placement Prep", icon:"🎯", accent:"#f50057",
    level:"Pre-placement · Resume, HR, OA strategy, CS fundamentals, LLD",
    placement:"This wins or loses the offer independent of your coding skills",
    tracks:[
      {
        id:"pl-resume", title:"Resume & Portfolio", priority:"CRITICAL", status:"available", est:"1 week",
        pw:"Gets you shortlisted — nothing else matters if this is weak",
        sub:[
          "1-page LaTeX resume — clean, ATS-friendly format","Quantify every project — metrics, users, perf improvement %",
          "Add CP achievements — CF rating badge, LC rank, contest wins","GitHub links for all projects — proper READMEs",
          "Projects — 3 strong projects, WebRTC one is a goldmine","Deploy all projects — live links > GitHub-only",
          "WebRTC project README — architecture diagram + demo GIF","LinkedIn — photo, headline, about, 3 featured projects",
          "LinkedIn — all skills, education, certifications","GitHub profile README — pinned repos, activity stats",
          "Cold email template — for referrals at target companies","Portfolio site (optional but impressive) — Next.js",
        ],
        rev:["Resume reviewed by 2 peers + 1 senior","ATS keyword match — apply resume to JD text","30-second pitch of your best project — practice aloud"],
        res:["Jake's Resume Template (LaTeX)","Levels.fyi Resume Guide","FAANG resume subreddit"],
      },
      {
        id:"pl-behavioral", title:"Behavioral & HR Interviews", priority:"CRITICAL", status:"available", est:"1 week",
        pw:"Eliminates 30% of candidates who passed the technical round",
        sub:[
          "STAR method — master the framework completely","Tell me about yourself — 90-second crisp pitch",
          "Why this company — researched, specific, not generic","Biggest strength — relevant to SWE role",
          "Biggest weakness — honest + what you are actively doing","Tell me about a technical challenge you overcame",
          "Tell me about a conflict with a teammate","Tell me about a failure and what you learned from it",
          "Where do you see yourself in 5 years","A time you took initiative without being asked",
          "A time you had to learn something very quickly","A time you disagreed with your team / manager",
          "Amazon Leadership Principles — all 16, one story each","Questions to ask the interviewer — prepare 5 smart ones",
          "Salary negotiation — counteroffer script, know your range",
        ],
        rev:["Record yourself answering 5 questions — watch it back","Mock HR interview with a friend — 30 min session","Write down STAR stories for top 6 questions"],
        res:["Grokking Behavioral Interview","Amazon LP guide (levels.fyi)","InterviewBit HR section"],
      },
      {
        id:"pl-oa", title:"OA Strategy & Simulation", priority:"CRITICAL", status:"available", est:"Ongoing",
        pw:"First filter — every single company starts with an OA",
        sub:[
          "Platform fluency — HackerRank, HackerEarth, Codeforces","Read problem twice before writing a single line",
          "Edge case checklist — empty input, single element, overflow, negative","Time complexity analysis before coding — verify fits",
          "Partial scoring — submit what you have if stuck near end","Template paste before timer starts — DSU, segtree, BIT",
          "Check I/O format carefully — most WAs are I/O bugs","Fast I/O — always enable in C++ OAs",
          "Company OA prep: Amazon — 2 problems, 90 min, medium-hard","Company OA: Google — 2 problems + debugging + MCQs",
          "Company OA: Microsoft — 3 problems, algorithmic","Company OA: Goldman/Citadel — math + algo mixed",
          "OA simulation weekly — 2 new problems, 90 min, no internet","Flashcard common OA patterns — DP, graphs, greedy, strings",
        ],
        rev:["Weekly OA simulation — fresh problems, 90 min cold","Review all past OA mistakes in mistake log"],
        res:["LeetCode company tags","OA archives (GitHub — InterviewDB)","Glassdoor OA experience reports"],
      },
      {
        id:"pl-cs", title:"CS Fundamentals (OS, Networks, DBMS)", priority:"HIGH", status:"available", est:"3 weeks",
        pw:"Asked in 60% of SWE interviews, all SDE-1 campus drives",
        sub:[
          "OS: Process vs Thread — memory layout, PCB, context switch","OS: Scheduling — FCFS, SJF, Round Robin, Priority, MLFQ",
          "OS: Deadlock — 4 conditions, prevention, Banker's algorithm","OS: Memory — paging, segmentation, page fault handling",
          "OS: Virtual memory — TLB, page table structure, page replacement","OS: Semaphores vs Mutex — producer-consumer, dining philosophers",
          "OS: IPC — pipes, message queues, shared memory, sockets","OS: Thrashing — working set model, prevention",
          "Networks: OSI model — all 7 layers + protocols at each","Networks: TCP vs UDP — headers, reliability, use cases",
          "Networks: TCP 3-way handshake + 4-way connection close","Networks: HTTP/1.1 vs HTTP/2 vs HTTP/3 — differences",
          "Networks: DNS resolution — recursive vs iterative","Networks: TLS handshake — simplified, certificate validation",
          "Networks: IP, subnetting, CIDR basics","DBMS: Normalization — 1NF through BCNF with examples",
          "DBMS: Transactions — ACID, all 4 properties","DBMS: Indexing — B+ tree internals, hash index",
          "DBMS: Keys — primary, foreign, candidate, super, composite","DBMS: SQL — all join types, GROUP BY, HAVING, window functions",
        ],
        rev:["Deadlock — draw resource allocation graph example","TCP 3-way handshake — explain each packet purpose","All 6 SQL join types — write with example tables","Address translation: virtual → physical step by step"],
        res:["Arpit Bhayani OS Notes","Forouzan Computer Networks","GATE Overflow DBMS section"],
      },
      {
        id:"pl-lld", title:"OOP, Design Patterns & LLD", priority:"HIGH", status:"available", est:"3 weeks",
        pw:"LLD rounds mandatory at mid-large companies (Flipkart, Paytm, etc.)",
        sub:[
          "OOP — encapsulation, inheritance, polymorphism, abstraction — code examples","SOLID — SRP, OCP, LSP, ISP, DIP — each with bad + good code",
          "DRY, KISS, YAGNI — when they conflict","Design Patterns: Singleton — thread-safe implementation",
          "Design Patterns: Factory + Abstract Factory","Design Patterns: Builder — fluent builder for complex objects",
          "Design Patterns: Prototype — clone with deep copy","Design Patterns: Adapter — legacy system integration",
          "Design Patterns: Decorator — dynamic behavior","Design Patterns: Facade — simplify subsystem",
          "Design Patterns: Proxy — lazy init, access control","Design Patterns: Observer — event system",
          "Design Patterns: Strategy — pluggable algorithms","Design Patterns: Command — undo/redo",
          "Design Patterns: Iterator — custom collection traversal","UML Class Diagrams — read and write",
          "LLD: Parking Lot — full class design","LLD: Library Management System",
          "LLD: Chess / Snake & Ladder game","LLD: ATM Machine",
          "LLD: Elevator System","LLD: Ride-sharing Uber object model",
          "LLD: Movie Booking (BookMyShow)","LLD: Hotel Management",
          "Interface vs Abstract class — when each","Composition over inheritance — concrete example",
        ],
        rev:["Parking Lot class diagram from scratch in 20 min","Observer pattern — implement from scratch","SOLID: bad code → good code refactor example for SRP + OCP"],
        res:["Gaurav Sen LLD Playlist","Refactoring Guru (refactoring.guru)","Head First Design Patterns (book)"],
      },
    ],
  },
];

function buildChecks() {
  const c = {};
  SECTIONS.forEach(s => s.tracks.forEach(t => t.sub.forEach((_,i) => { c[`${t.id}-${i}`]=false; })));
  return c;
}
function buildRevChecks() {
  const c = {};
  SECTIONS.forEach(s => s.tracks.forEach(t => (t.rev||[]).forEach((_,i) => { c[`rev-${t.id}-${i}`]=false; })));
  return c;
}
function buildStatuses() {
  const s = {};
  SECTIONS.forEach(sec => sec.tracks.forEach(t => { s[t.id]=t.status; }));
  return s;
}

function pct(trackId, sub, checks) {
  const d = sub.filter((_,i)=>checks[`${trackId}-${i}`]).length;
  return sub.length ? Math.round(d/sub.length*100) : 0;
}
function secPct(secId, checks) {
  const sec = SECTIONS.find(s=>s.id===secId);
  const total = sec.tracks.reduce((a,t)=>a+t.sub.length,0);
  const done = sec.tracks.reduce((a,t)=>a+t.sub.filter((_,i)=>checks[`${t.id}-${i}`]).length,0);
  return total ? Math.round(done/total*100) : 0;
}

export default function App() {
  const [tab, setTab] = useState("roadmap");
  const [sec, setSec] = useState("dsa");
  const [checks, setChecks] = useState(buildChecks);
  const [revChecks, setRevChecks] = useState(buildRevChecks);
  const [statuses, setStatuses] = useState(buildStatuses);
  const [expanded, setExpanded] = useState({});
  const [notes, setNotes] = useState({general:"",dsa:"",cp:"",webdev:"",placement:"",mistakes:""});
  const [dailyTasks, setDailyTasks] = useState(
    ["Solve 2 LC mediums (timed)","CF problem 1600–1800 rated","Current study block topic","Revision: 1 concept from checklist",""].map((t,i)=>({id:i,text:t,done:false}))
  );
  const [weeklyGoals, setWeeklyGoals] = useState(
    ["Complete DSA-Graphs subtopics","Participate in CF round","Go: finish HTTP server","LLD: Parking Lot design","Weekly contest LC",""].map((g,i)=>({id:i,text:g,done:false,grade:""}))
  );
  const [monthlyGoals, setMonthlyGoals] = useState(
    ["CF Rating +100","NeetCode 150 done","WebRTC signaling server deployed","Resume final draft","System Design: 5 designs done",""].map((g,i)=>({id:i,text:g,done:false,grade:""}))
  );
  const [gradeLog, setGradeLog] = useState(
    [1,2,3,4].map(i=>({week:`Week ${i}`,dsa:"",cp:"",web:"",placement:"",overall:"",note:""}))
  );
  const [dailyMetrics, setDailyMetrics] = useState({lc:"",cf:"",hours:"",contest:""});

  const section = SECTIONS.find(s=>s.id===sec);
  const accent = section?.accent || "#7c4dff";

  const cycleStatus = (id, e) => {
    e.stopPropagation();
    const order = ["locked","available","in_progress","done"];
    setStatuses(p=>({...p,[id]:order[(order.indexOf(p[id])+1)%order.length]}));
  };

  const T = (id, label) => (
    <button key={id} onClick={()=>setTab(id)} style={{
      padding:"9px 16px", cursor:"pointer", fontFamily:"inherit", fontSize:10, letterSpacing:2,
      background:tab===id?`${accent}1a`:"transparent", color:tab===id?accent:"#3a3a4a",
      border:"none", borderBottom:`2px solid ${tab===id?accent:"transparent"}`,
      textTransform:"uppercase", transition:"all 0.15s", whiteSpace:"nowrap",
    }}>{label}</button>
  );

  return (
    <div style={{fontFamily:"'JetBrains Mono','Courier New',monospace",background:"#090910",minHeight:"100vh",color:"#ccc"}}>

      {/* HEADER */}
      <div style={{background:"#0b0b14",borderBottom:`1px solid ${BORDER}`,padding:"18px 24px 0",position:"sticky",top:0,zIndex:100}}>
        <div style={{maxWidth:1240,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10,marginBottom:14}}>
            <div>
              <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:4,marginBottom:2}}>INTERNSHIP & PLACEMENT ROADMAP 2025–26</div>
              <div style={{fontSize:"clamp(14px,2.5vw,22px)",fontWeight:700,color:"#eee",letterSpacing:1}}>
                MASTERY <span style={{color:accent}}>TRACKER</span>
              </div>
            </div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {SECTIONS.map(s=>{
                const p=secPct(s.id,checks);
                const ia=sec===s.id&&tab==="roadmap";
                return (
                  <button key={s.id} onClick={()=>{setSec(s.id);setTab("roadmap");}} style={{
                    background:ia?`${s.accent}18`:"transparent",border:`1px solid ${ia?s.accent:BORDER}`,
                    color:ia?s.accent:"#444",padding:"5px 13px",cursor:"pointer",fontFamily:"inherit",
                    fontSize:9,letterSpacing:2,textTransform:"uppercase",position:"relative",overflow:"hidden"
                  }}>
                    {s.icon} {s.id.toUpperCase()}
                    <div style={{position:"absolute",bottom:0,left:0,width:`${p}%`,height:2,background:s.accent,transition:"width 0.4s"}}/>
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{display:"flex",overflowX:"auto",gap:0}}>
            {T("roadmap","📋 Roadmap")}
            {T("daily","📅 Daily")}
            {T("weekly","📆 Weekly")}
            {T("monthly","🗓 Monthly")}
            {T("grades","📊 Grades")}
            {T("notes","📝 Notes")}
          </div>
        </div>
      </div>

      <div style={{maxWidth:1240,margin:"0 auto",padding:24}}>

        {/* ══ ROADMAP ══ */}
        {tab==="roadmap" && <>
          <div style={{border:`1px solid ${accent}2a`,background:`${accent}06`,padding:"14px 18px",marginBottom:20,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",right:-10,top:-15,fontSize:90,opacity:0.04,pointerEvents:"none"}}>{section.icon}</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
              <div>
                <div style={{fontSize:9,color:accent,letterSpacing:3,marginBottom:3}}>CURRENT LEVEL</div>
                <div style={{fontSize:12,color:"#aaa",marginBottom:5}}>{section.level}</div>
                <div style={{fontSize:10,color:"#444"}}>🎯 {section.placement}</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:2,marginBottom:1}}>SECTION PROGRESS</div>
                <div style={{fontSize:30,fontWeight:700,color:accent,lineHeight:1}}>{secPct(sec,checks)}%</div>
                <div style={{fontSize:9,color:"#2a2a3a",marginTop:2}}>
                  {section.tracks.reduce((a,t)=>a+t.sub.filter((_,i)=>checks[`${t.id}-${i}`]).length,0)}/
                  {section.tracks.reduce((a,t)=>a+t.sub.length,0)} topics
                </div>
              </div>
            </div>
            <div style={{marginTop:12,height:3,background:"#0d0d18"}}>
              <div style={{width:`${secPct(sec,checks)}%`,height:"100%",background:`linear-gradient(90deg,${accent},${accent}55)`,transition:"width 0.5s",boxShadow:`0 0 8px ${accent}66`}}/>
            </div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:14}}>
            {section.tracks.map((track,idx)=>{
              const st=statuses[track.id]||track.status;
              const sc=STATUS_CFG[st];
              const p=pct(track.id,track.sub,checks);
              const isExp=expanded[track.id];
              const pc=PRIORITY_COLOR[track.priority];
              const done=track.sub.filter((_,i)=>checks[`${track.id}-${i}`]).length;
              const revDone=(track.rev||[]).filter((_,i)=>revChecks[`rev-${track.id}-${i}`]).length;
              const revTotal=(track.rev||[]).length;
              return (
                <div key={track.id} onClick={()=>setExpanded(e=>({...e,[track.id]:!e[track.id]}))}
                  style={{background:CARD_BG,border:`1px solid ${st==="in_progress"?accent+"44":BORDER}`,cursor:"pointer",transition:"border-color 0.2s",opacity:st==="locked"?0.5:1,position:"relative",overflow:"hidden"}}>
                  <div style={{height:2,background:pc}}/>
                  <div style={{position:"absolute",top:10,right:10,fontSize:44,fontWeight:900,color:"#ffffff05",lineHeight:1,pointerEvents:"none"}}>{String(idx+1).padStart(2,"0")}</div>
                  <div style={{padding:"13px 14px 10px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                      <span style={{fontSize:8,padding:"2px 7px",border:`1px solid ${pc}44`,color:pc,background:`${pc}10`,letterSpacing:1}}>{track.priority}</span>
                      <span style={{fontSize:8,color:"#2a2a3a",marginLeft:"auto",letterSpacing:1}}>EST {track.est}</span>
                      <button onClick={e=>cycleStatus(track.id,e)} style={{fontSize:8,padding:"2px 8px",border:`1px solid ${sc.color}44`,color:sc.color,background:sc.bg,cursor:"pointer",fontFamily:"inherit",letterSpacing:1}}>
                        {sc.icon} {sc.label}
                      </button>
                    </div>
                    <div style={{fontSize:13,fontWeight:700,color:"#e0e0e0",marginBottom:4}}>{track.title}</div>
                    <div style={{fontSize:10,color:"#444",marginBottom:9,lineHeight:1.4}}>🎯 {track.pw}</div>
                    <div style={{marginBottom:6}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                        <span style={{fontSize:8,color:"#2a2a3a",letterSpacing:1}}>{done}/{track.sub.length} TOPICS</span>
                        <span style={{fontSize:8,color:p===100?"#00e676":accent}}>{p}%</span>
                      </div>
                      <div style={{height:3,background:"#0a0a12"}}>
                        <div style={{width:`${p}%`,height:"100%",background:p===100?"#00e676":accent,transition:"width 0.4s",boxShadow:p>0?`0 0 5px ${accent}44`:"none"}}/>
                      </div>
                    </div>
                    {revTotal>0&&(
                      <div style={{marginBottom:6}}>
                        <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                          <span style={{fontSize:8,color:"#ffa72688",letterSpacing:1}}>🔄 {revDone}/{revTotal} REVISIONS</span>
                          <span style={{fontSize:8,color:revDone===revTotal?"#ffa726":"#ffa72644"}}>{revTotal?Math.round(revDone/revTotal*100):0}%</span>
                        </div>
                        <div style={{height:2,background:"#0a0a12"}}>
                          <div style={{width:`${revTotal?Math.round(revDone/revTotal*100):0}%`,height:"100%",background:"#ffa72666",transition:"width 0.4s"}}/>
                        </div>
                      </div>
                    )}
                    <div style={{fontSize:8,color:"#1e1e2e",textAlign:"center",letterSpacing:2}}>{isExp?"▲ COLLAPSE":"▼ EXPAND DETAILS"}</div>
                  </div>
                  {isExp && (
                    <div style={{borderTop:`1px solid ${BORDER}`,background:"#0b0b13",padding:"11px 14px 14px"}}>
                      <div style={{fontSize:8,color:"#2a2a3a",letterSpacing:2,marginBottom:8}}>SUBTOPICS — click to check off</div>
                      {track.sub.map((s,i)=>{
                        const k=`${track.id}-${i}`;
                        const chk=checks[k];
                        return (
                          <div key={i} onClick={e=>{e.stopPropagation();setChecks(p=>({...p,[k]:!p[k]}));}}
                            style={{display:"flex",alignItems:"flex-start",gap:8,padding:"5px 0",borderBottom:`1px solid #0c0c16`,cursor:"pointer"}}>
                            <div style={{width:12,height:12,minWidth:12,border:`1px solid ${chk?"#00e676":"#1e1e2e"}`,background:chk?"#00e67615":"transparent",display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}>
                              {chk&&<span style={{color:"#00e676",fontSize:8,lineHeight:1}}>✓</span>}
                            </div>
                            <span style={{fontSize:11,color:chk?"#262626":"#999",textDecoration:chk?"line-through":"none",lineHeight:1.4}}>{s}</span>
                          </div>
                        );
                      })}

                      {/* INLINE REVISION SECTION */}
                      {(track.rev||[]).length>0&&(
                        <div style={{marginTop:14,padding:"12px 12px 10px",background:"#ffa72606",border:`1px solid #ffa72622`}}>
                          <div style={{fontSize:8,color:"#ffa726",letterSpacing:2,marginBottom:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <span>🔄 REVISION CHECKPOINTS</span>
                            <span style={{color:"#ffa72666"}}>{(track.rev||[]).filter((_,i)=>revChecks[`rev-${track.id}-${i}`]).length}/{(track.rev||[]).length} done</span>
                          </div>
                          {(track.rev||[]).map((r,i)=>{
                            const k=`rev-${track.id}-${i}`;
                            const chk=revChecks[k];
                            const isWeekly=r.startsWith("🔁 WEEKLY");
                            const isBi=r.startsWith("🔁 BIWEEKLY");
                            const isMonthly=r.startsWith("🔁 MONTHLY");
                            const isRev=r.startsWith("🔁 REVISION");
                            const tagColor=isWeekly?"#42a5f5":isBi?"#ab47bc":isMonthly?"#ef5350":isRev?"#ffa726":"#ffa726";
                            return (
                              <div key={i} onClick={e=>{e.stopPropagation();setRevChecks(p=>({...p,[k]:!p[k]}));}}
                                style={{display:"flex",alignItems:"flex-start",gap:8,padding:"6px 0",borderBottom:`1px solid #0c0c14`,cursor:"pointer",opacity:chk?0.35:1}}>
                                <div style={{width:12,height:12,minWidth:12,border:`1px solid ${chk?tagColor:"#2a2a2a"}`,background:chk?`${tagColor}18`:"transparent",display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}>
                                  {chk&&<span style={{color:tagColor,fontSize:8,lineHeight:1}}>✓</span>}
                                </div>
                                <div style={{flex:1}}>
                                  {(isWeekly||isBi||isMonthly||isRev)&&(
                                    <span style={{fontSize:7,color:tagColor,background:`${tagColor}15`,padding:"1px 5px",marginRight:6,letterSpacing:1,border:`1px solid ${tagColor}30`}}>
                                      {isWeekly?"WEEKLY":isBi?"BIWEEKLY":isMonthly?"MONTHLY":"REVISION"}
                                    </span>
                                  )}
                                  <span style={{fontSize:11,color:chk?"#1a1a1a":"#888",textDecoration:chk?"line-through":"none",lineHeight:1.5}}>
                                    {r.replace(/^🔁 (WEEKLY|BIWEEKLY|MONTHLY|REVISION): /,"")}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <div style={{marginTop:11}}>
                        <div style={{fontSize:8,color:"#2a2a3a",letterSpacing:2,marginBottom:5}}>RESOURCES</div>
                        {track.res.map((r,i)=>(
                          <div key={i} style={{fontSize:10,color:accent,paddingLeft:8,borderLeft:`2px solid ${accent}33`,marginBottom:3}}>→ {r}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>}

        {/* ══ DAILY ══ */}
        {tab==="daily" && (
          <div style={{maxWidth:680}}>
            <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:3,marginBottom:16}}>DAILY TRACKER — reset each day, build the streak</div>
            <DailySchedule accent={accent}/>
            <div style={{marginTop:20,borderTop:`1px solid ${BORDER}`,paddingTop:18}}>
              <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:2,marginBottom:10}}>TODAY'S METRICS</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10,marginBottom:18}}>
                {[["lc","LC Problems"],["cf","CF Problems"],["hours","Study Hours"],["contest","Contest? (0/1)"]].map(([k,label])=>(
                  <div key={k} style={{background:CARD_BG,border:`1px solid ${BORDER}`,padding:"12px"}}>
                    <div style={{fontSize:8,color:"#333",letterSpacing:2,marginBottom:5}}>{label}</div>
                    <input type="number" placeholder="0" value={dailyMetrics[k]} onChange={e=>setDailyMetrics(p=>({...p,[k]:e.target.value}))}
                      style={{background:"transparent",border:"none",borderBottom:`1px solid ${BORDER}`,color:accent,fontSize:22,fontWeight:700,fontFamily:"inherit",width:"100%",outline:"none"}}/>
                  </div>
                ))}
              </div>
              <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:2,marginBottom:10}}>TODAY'S CUSTOM TASKS</div>
              {dailyTasks.map((task,i)=>(
                <div key={task.id} style={{display:"flex",gap:9,marginBottom:7,alignItems:"center"}}>
                  <div onClick={()=>setDailyTasks(p=>p.map((t,j)=>j===i?{...t,done:!t.done}:t))}
                    style={{width:15,height:15,minWidth:15,border:`1px solid ${task.done?"#00e676":"#1e1e2e"}`,background:task.done?"#00e67615":"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {task.done&&<span style={{color:"#00e676",fontSize:9}}>✓</span>}
                  </div>
                  <input value={task.text} onChange={e=>setDailyTasks(p=>p.map((t,j)=>j===i?{...t,text:e.target.value}:t))}
                    placeholder={`Task ${i+1}...`}
                    style={{flex:1,background:"#0d0d15",border:`1px solid ${BORDER}`,color:task.done?"#2a2a2a":"#bbb",padding:"6px 10px",fontFamily:"inherit",fontSize:11,textDecoration:task.done?"line-through":"none",outline:"none"}}/>
                </div>
              ))}
              <button onClick={()=>setDailyTasks(p=>[...p,{id:Date.now(),text:"",done:false}])}
                style={{background:"transparent",border:`1px solid ${BORDER}`,color:"#333",padding:"5px 13px",cursor:"pointer",fontFamily:"inherit",fontSize:9,letterSpacing:2,marginTop:4}}>
                + ADD TASK
              </button>
            </div>
          </div>
        )}

        {/* ══ WEEKLY ══ */}
        {tab==="weekly" && (
          <div style={{maxWidth:780}}>
            <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:3,marginBottom:18}}>WEEKLY GOALS & REVIEW</div>
            <div style={{background:CARD_BG,border:`1px solid ${BORDER}`,padding:"18px",marginBottom:20}}>
              <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:2,marginBottom:12}}>THIS WEEK'S GOALS</div>
              {weeklyGoals.map((goal,i)=>(
                <div key={goal.id} style={{display:"flex",gap:9,marginBottom:9,alignItems:"center",flexWrap:"wrap"}}>
                  <div onClick={()=>setWeeklyGoals(p=>p.map((g,j)=>j===i?{...g,done:!g.done}:g))}
                    style={{width:15,height:15,minWidth:15,border:`1px solid ${goal.done?"#00e676":"#1e1e2e"}`,background:goal.done?"#00e67615":"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {goal.done&&<span style={{color:"#00e676",fontSize:9}}>✓</span>}
                  </div>
                  <input value={goal.text} onChange={e=>setWeeklyGoals(p=>p.map((g,j)=>j===i?{...g,text:e.target.value}:g))}
                    placeholder={`Goal ${i+1}...`}
                    style={{flex:1,minWidth:160,background:"#0b0b12",border:`1px solid ${BORDER}`,color:goal.done?"#2a2a2a":"#bbb",padding:"5px 9px",fontFamily:"inherit",fontSize:11,textDecoration:goal.done?"line-through":"none",outline:"none"}}/>
                  <select value={goal.grade} onChange={e=>setWeeklyGoals(p=>p.map((g,j)=>j===i?{...g,grade:e.target.value}:g))}
                    style={{background:"#0b0b12",border:`1px solid ${goal.grade?GRADE_COLOR(goal.grade)+"44":BORDER}`,color:goal.grade?GRADE_COLOR(goal.grade):"#2a2a3a",padding:"3px 7px",fontFamily:"inherit",fontSize:10,outline:"none",cursor:"pointer"}}>
                    <option value="">Grade</option>
                    {["S","A","B","C","D","F"].map(g=><option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              ))}
              <button onClick={()=>setWeeklyGoals(p=>[...p,{id:Date.now(),text:"",done:false,grade:""}])}
                style={{background:"transparent",border:`1px solid ${BORDER}`,color:"#333",padding:"5px 13px",cursor:"pointer",fontFamily:"inherit",fontSize:9,letterSpacing:2,marginTop:4}}>
                + ADD GOAL
              </button>
            </div>
            <div style={{background:CARD_BG,border:`1px solid ${BORDER}`,padding:"18px"}}>
              <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:2,marginBottom:14}}>WEEKLY REVIEW PROMPTS</div>
              {["What was my biggest win this week?","Which concept exposed the biggest gap in my knowledge?","Which module needs more time next week?","Daily schedule consistency: (rate 1–10) — what broke it?","What would I do differently next week?","Mistake pattern: what type of problem am I consistently failing?"].map((q,i)=>(
                <div key={i} style={{marginBottom:13}}>
                  <div style={{fontSize:10,color:"#444",marginBottom:4}}>{q}</div>
                  <textarea rows={2} style={{width:"100%",background:"#0b0b12",border:`1px solid ${BORDER}`,color:"#999",padding:"7px 10px",fontFamily:"inherit",fontSize:11,outline:"none",resize:"vertical",boxSizing:"border-box"}}/>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ MONTHLY ══ */}
        {tab==="monthly" && (
          <div style={{maxWidth:860}}>
            <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:3,marginBottom:18}}>MONTHLY MILESTONES & TIMELINE</div>
            <div style={{background:CARD_BG,border:`1px solid ${BORDER}`,padding:"18px",marginBottom:20}}>
              <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:2,marginBottom:12}}>THIS MONTH'S MILESTONES</div>
              {monthlyGoals.map((goal,i)=>(
                <div key={goal.id} style={{display:"flex",gap:9,marginBottom:9,alignItems:"center",flexWrap:"wrap"}}>
                  <div onClick={()=>setMonthlyGoals(p=>p.map((g,j)=>j===i?{...g,done:!g.done}:g))}
                    style={{width:15,height:15,minWidth:15,border:`1px solid ${goal.done?"#00e676":"#1e1e2e"}`,background:goal.done?"#00e67615":"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {goal.done&&<span style={{color:"#00e676",fontSize:9}}>✓</span>}
                  </div>
                  <input value={goal.text} onChange={e=>setMonthlyGoals(p=>p.map((g,j)=>j===i?{...g,text:e.target.value}:g))}
                    placeholder={`Milestone ${i+1}...`}
                    style={{flex:1,minWidth:180,background:"#0b0b12",border:`1px solid ${BORDER}`,color:goal.done?"#2a2a2a":"#bbb",padding:"5px 9px",fontFamily:"inherit",fontSize:11,textDecoration:goal.done?"line-through":"none",outline:"none"}}/>
                  <select value={goal.grade} onChange={e=>setMonthlyGoals(p=>p.map((g,j)=>j===i?{...g,grade:e.target.value}:g))}
                    style={{background:"#0b0b12",border:`1px solid ${goal.grade?GRADE_COLOR(goal.grade)+"44":BORDER}`,color:goal.grade?GRADE_COLOR(goal.grade):"#2a2a3a",padding:"3px 7px",fontFamily:"inherit",fontSize:10,outline:"none",cursor:"pointer"}}>
                    <option value="">Grade</option>
                    {["S","A","B","C","D","F"].map(g=><option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              ))}
              <button onClick={()=>setMonthlyGoals(p=>[...p,{id:Date.now(),text:"",done:false,grade:""}])}
                style={{background:"transparent",border:`1px solid ${BORDER}`,color:"#333",padding:"5px 13px",cursor:"pointer",fontFamily:"inherit",fontSize:9,letterSpacing:2,marginTop:4}}>
                + ADD MILESTONE
              </button>
            </div>
            <div style={{background:CARD_BG,border:`1px solid ${BORDER}`,padding:"18px"}}>
              <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:2,marginBottom:16}}>PLACEMENT TIMELINE</div>
              {[
                {label:"Month 1–2",title:"Foundation Solidify",color:"#00e676",items:["DSA Core + Trees + Graphs complete","NeetCode 150 done, Blind 75 done","CF push to 1700+","Go backend: REST API + DB project done"]},
                {label:"Month 3",title:"Advanced DSA + System Design",color:"#42a5f5",items:["DP all patterns complete","10 system designs done and documented","WebRTC project deployed live","Resume finalized + LinkedIn updated"]},
                {label:"Month 4",title:"Full-Stack + Microservices Start",color:"#7c4dff",items:["Microservices 3-service demo deployed","Docker + CI/CD pipeline working","LLD: 5 designs solid","Actively applying to 20+ companies"]},
                {label:"Month 5–6",title:"Interview Blitz + OA Season",color:"#f50057",items:["Mock interviews 3×/week","CF Expert achieved","All behavioral answers polished","OA participation: 2 per week minimum"]},
              ].map((phase,i)=>(
                <div key={i} style={{display:"flex",gap:14,marginBottom:14,paddingBottom:14,borderBottom:i<3?`1px solid ${BORDER}`:"none"}}>
                  <div style={{minWidth:72,textAlign:"right",paddingTop:2}}>
                    <div style={{fontSize:9,color:phase.color,letterSpacing:1}}>{phase.label}</div>
                  </div>
                  <div style={{width:2,background:BORDER,flexShrink:0,position:"relative"}}>
                    <div style={{position:"absolute",top:4,left:-4,width:10,height:10,borderRadius:"50%",border:`2px solid ${phase.color}`,background:"#090910"}}/>
                  </div>
                  <div>
                    <div style={{fontSize:12,fontWeight:700,color:"#ddd",marginBottom:5}}>{phase.title}</div>
                    {phase.items.map((item,j)=><div key={j} style={{fontSize:11,color:"#444",marginBottom:3}}>→ {item}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ GRADES ══ */}
        {tab==="grades" && (
          <div style={{maxWidth:960}}>
            <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:3,marginBottom:8}}>WEEKLY GRADE LOG</div>
            <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
              {["S=Exceptional","A=Good","B=Adequate","C=Below goal","D=Poor","F=Skipped"].map((g,i)=>{
                const letter=g[0];
                return <span key={i} style={{fontSize:10,padding:"3px 10px",border:`1px solid ${GRADE_COLOR(letter)}44`,color:GRADE_COLOR(letter),background:`${GRADE_COLOR(letter)}10`}}>{g}</span>;
              })}
            </div>
            <div style={{background:CARD_BG,border:`1px solid ${BORDER}`,overflowX:"auto",marginBottom:20}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
                <thead>
                  <tr style={{borderBottom:`1px solid ${BORDER}`}}>
                    {["WEEK","DSA","CP","WEB DEV","PLACEMENT","OVERALL","NOTES"].map(h=>(
                      <th key={h} style={{padding:"9px 12px",textAlign:"left",fontSize:8,letterSpacing:2,color:"#2a2a3a",fontWeight:400,whiteSpace:"nowrap"}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {gradeLog.map((row,i)=>(
                    <tr key={i} style={{borderBottom:`1px solid ${BORDER}18`}}>
                      <td style={{padding:"7px 12px",color:"#555",fontSize:10,whiteSpace:"nowrap"}}>{row.week}</td>
                      {["dsa","cp","web","placement","overall"].map(k=>(
                        <td key={k} style={{padding:"5px 12px"}}>
                          <select value={row[k]||""} onChange={e=>setGradeLog(p=>p.map((r,j)=>j===i?{...r,[k]:e.target.value}:r))}
                            style={{background:"transparent",border:`1px solid ${row[k]?GRADE_COLOR(row[k])+"44":BORDER}`,color:row[k]?GRADE_COLOR(row[k]):"#2a2a3a",padding:"3px 6px",fontFamily:"inherit",fontSize:11,outline:"none",cursor:"pointer",minWidth:60}}>
                            <option value="">—</option>
                            {["S","A","B","C","D","F"].map(g=><option key={g} value={g}>{g}</option>)}
                          </select>
                        </td>
                      ))}
                      <td style={{padding:"5px 12px"}}>
                        <input value={row.note||""} onChange={e=>setGradeLog(p=>p.map((r,j)=>j===i?{...r,note:e.target.value}:r))}
                          placeholder="notes..." style={{background:"transparent",border:`1px solid ${BORDER}`,color:"#666",padding:"3px 8px",fontFamily:"inherit",fontSize:10,width:130,outline:"none"}}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={()=>setGradeLog(p=>[...p,{week:`Week ${p.length+1}`,dsa:"",cp:"",web:"",placement:"",overall:"",note:""}])}
              style={{background:"transparent",border:`1px solid ${BORDER}`,color:"#333",padding:"7px 15px",cursor:"pointer",fontFamily:"inherit",fontSize:9,letterSpacing:2,marginBottom:24}}>
              + ADD WEEK
            </button>
            <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:2,marginBottom:12}}>OVERALL TOPIC PROGRESS</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>
              {SECTIONS.map(s=>{
                const p=secPct(s.id,checks);
                const done=s.tracks.reduce((a,t)=>a+t.sub.filter((_,i)=>checks[`${t.id}-${i}`]).length,0);
                const total=s.tracks.reduce((a,t)=>a+t.sub.length,0);
                return (
                  <div key={s.id} style={{background:CARD_BG,border:`1px solid ${BORDER}`,padding:"14px"}}>
                    <div style={{fontSize:11,color:s.accent,marginBottom:6}}>{s.icon} {s.title}</div>
                    <div style={{fontSize:28,fontWeight:700,color:s.accent,marginBottom:6,lineHeight:1}}>{p}%</div>
                    <div style={{height:3,background:"#0a0a12",marginBottom:4}}>
                      <div style={{width:`${p}%`,height:"100%",background:s.accent,boxShadow:`0 0 5px ${s.accent}66`,transition:"width 0.4s"}}/>
                    </div>
                    <div style={{fontSize:8,color:"#2a2a3a"}}>{done}/{total} topics checked</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ══ NOTES ══ */}
        {tab==="notes" && (
          <div>
            <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:3,marginBottom:18}}>NOTES & SCRATCH PAD</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:14}}>
              {[
                {k:"general",label:"📋 General Notes",a:"#aaa"},
                {k:"dsa",label:"⚡ DSA Notes & Patterns",a:"#00e676"},
                {k:"cp",label:"🏆 CP Notes & Templates",a:"#ff6d00"},
                {k:"webdev",label:"🌐 Web Dev Notes",a:"#7c4dff"},
                {k:"placement",label:"🎯 Placement Notes",a:"#f50057"},
                {k:"mistakes",label:"❌ Mistake Log (WA/TLE patterns)",a:"#ff1744"},
              ].map(({k,label,a})=>(
                <div key={k} style={{background:CARD_BG,border:`1px solid ${BORDER}`,padding:"14px"}}>
                  <div style={{fontSize:9,color:a,letterSpacing:2,marginBottom:9}}>{label}</div>
                  <textarea value={notes[k]||""} onChange={e=>setNotes(p=>({...p,[k]:e.target.value}))}
                    placeholder={`${label} here...\n\n— Key patterns noticed\n— Things that tripped you up\n— Links & resources\n— Interview observations\n— Random ideas`}
                    rows={13}
                    style={{width:"100%",background:"#0b0b12",border:`1px solid ${BORDER}`,color:"#999",padding:"9px 11px",fontFamily:"inherit",fontSize:11,outline:"none",resize:"vertical",lineHeight:1.6,boxSizing:"border-box"}}/>
                  <div style={{fontSize:8,color:"#1a1a28",marginTop:3,textAlign:"right"}}>{(notes[k]||"").length} chars</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* FLOATING LEGEND */}
      {tab==="roadmap"&&(
        <div style={{position:"fixed",bottom:16,right:16,background:"#0b0b14",border:`1px solid ${BORDER}`,padding:"10px 13px",fontSize:9,zIndex:200,letterSpacing:1}}>
          <div style={{color:"#1a1a28",marginBottom:5,letterSpacing:2}}>STATUS</div>
          {Object.values(STATUS_CFG).map(s=>(
            <div key={s.label} style={{display:"flex",alignItems:"center",gap:5,marginBottom:3}}>
              <span style={{color:s.color}}>{s.icon}</span>
              <span style={{color:"#2a2a3a"}}>{s.label}</span>
            </div>
          ))}
          <div style={{borderTop:`1px solid ${BORDER}`,marginTop:5,paddingTop:5,color:"#1a1a28"}}>click badge to cycle</div>
          <div style={{borderTop:`1px solid ${BORDER}`,marginTop:5,paddingTop:5}}>
            <div style={{display:"flex",gap:4,alignItems:"center",marginBottom:2}}><span style={{color:"#42a5f5",fontSize:7}}>●</span><span style={{color:"#1a1a28"}}>WEEKLY rev</span></div>
            <div style={{display:"flex",gap:4,alignItems:"center",marginBottom:2}}><span style={{color:"#ab47bc",fontSize:7}}>●</span><span style={{color:"#1a1a28"}}>BIWEEKLY rev</span></div>
            <div style={{display:"flex",gap:4,alignItems:"center",marginBottom:2}}><span style={{color:"#ef5350",fontSize:7}}>●</span><span style={{color:"#1a1a28"}}>MONTHLY rev</span></div>
            <div style={{display:"flex",gap:4,alignItems:"center"}}><span style={{color:"#ffa726",fontSize:7}}>●</span><span style={{color:"#1a1a28"}}>REVISION task</span></div>
          </div>
        </div>
      )}
    </div>
  );
}

function DailySchedule({accent}){
  const items=[
    {time:"07:00–08:30",cat:"DSA",label:"LC mediums × 2 — timed, no hints"},
    {time:"08:30–09:00",cat:"DSA",label:"Upsolve / review yesterday's problem"},
    {time:"09:00–11:00",cat:"STUDY",label:"Main block — current roadmap track topic"},
    {time:"11:00–11:30",cat:"CP",label:"CF problem (1600–1800 rated, solo)"},
    {time:"14:00–15:30",cat:"STUDY",label:"Second block — project work / system design"},
    {time:"15:30–16:00",cat:"REVISION",label:"Revision checkpoints — 1 concept from tab"},
    {time:"20:00–21:00",cat:"CP",label:"Rated contest OR virtual contest (Wed/Fri/Sat)"},
    {time:"21:00–21:20",cat:"REVIEW",label:"Log: what did I learn, what was hard, tomorrow plan"},
  ];
  const cc={DSA:"#00e676",CP:"#ff6d00",STUDY:"#7c4dff",REVISION:"#ffa726",REVIEW:"#f50057"};
  return (
    <div style={{background:CARD_BG,border:`1px solid ${BORDER}`,padding:"14px"}}>
      <div style={{fontSize:9,color:"#2a2a3a",letterSpacing:2,marginBottom:11}}>SUGGESTED DAILY SCHEDULE</div>
      {items.map((item,i)=>(
        <div key={i} style={{display:"flex",gap:11,alignItems:"flex-start",padding:"6px 0",borderBottom:"1px solid #0c0c16"}}>
          <div style={{fontSize:9,color:"#2a2a3a",minWidth:88,paddingTop:1}}>{item.time}</div>
          <div style={{width:2,minWidth:2,background:`${cc[item.cat]}44`,borderRadius:2,alignSelf:"stretch"}}/>
          <div>
            <span style={{fontSize:8,color:cc[item.cat],letterSpacing:1,marginRight:7}}>{item.cat}</span>
            <span style={{fontSize:11,color:"#777"}}>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
