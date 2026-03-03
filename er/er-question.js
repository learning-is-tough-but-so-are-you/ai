window.ER_QUESTIONS = [
  {
    id:"q1",
    title:"Q1 外送平台",
    prompt:"先判斷哪些實體有直接關係，再設定端點 o/| 與 1/M。",
    rules:[
      "騎手可以配送 0 到多張訂單。",
      "每張訂單必須且只能由 1 位騎手配送。",
      "顧客可以下 0 到多張訂單。",
      "每張訂單必須且只能由 1 位顧客下單。"
    ],
    entities:[
      {id:"order", label:"訂單", x:420, y:40, w:160, h:78},
      {id:"rider", label:"騎手", x:70, y:560, w:190, h:88},
      {id:"customer", label:"顧客", x:760, y:560, w:190, h:88}
    ],
    relationships:[
      {id:"r1", label:"配送", a:"order", b:"rider", expected:{ order:{min:0,max:"M"}, rider:{min:1,max:"1"} }},
      {id:"r2", label:"下單", a:"order", b:"customer", expected:{ order:{min:0,max:"M"}, customer:{min:1,max:"1"} }}
    ]
  },
  {
    id:"q2",
    title:"Q2 選課系統",
    prompt:"以選課紀錄為核心，判斷學生、課程、教師之間的關係。",
    rules:[
      "學生可有 0 到多筆選課紀錄；每筆選課紀錄必屬 1 位學生。",
      "課程可有 0 到多筆選課紀錄；每筆選課紀錄必屬 1 門課程。",
      "教師可教授 0 到多門課程；每門課程必由 1 位教師教授。"
    ],
    entities:[
      {id:"student", label:"學生", x:60, y:80, w:180, h:82},
      {id:"enroll", label:"選課紀錄", x:390, y:560, w:220, h:88},
      {id:"course", label:"課程", x:760, y:80, w:180, h:82},
      {id:"teacher", label:"教師", x:390, y:80, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"產生", a:"student", b:"enroll", expected:{ student:{min:1,max:"1"}, enroll:{min:0,max:"M"} }},
      {id:"r2", label:"對應", a:"course", b:"enroll", expected:{ course:{min:1,max:"1"}, enroll:{min:0,max:"M"} }},
      {id:"r3", label:"教授", a:"teacher", b:"course", expected:{ teacher:{min:1,max:"1"}, course:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q3",
    title:"Q3 醫院預約",
    prompt:"判斷醫師、病人、預約、科別的關係。",
    rules:[
      "醫師可有 0 到多次預約；每次預約必對應 1 位醫師。",
      "病人可有 0 到多次預約；每次預約必對應 1 位病人。",
      "科別必有 1 到多位醫師；每位醫師必屬 1 個科別。"
    ],
    entities:[
      {id:"doctor", label:"醫師", x:70, y:90, w:180, h:82},
      {id:"patient", label:"病人", x:760, y:90, w:180, h:82},
      {id:"appt", label:"預約", x:410, y:560, w:180, h:88},
      {id:"dept", label:"科別", x:410, y:90, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"接診", a:"doctor", b:"appt", expected:{ doctor:{min:1,max:"1"}, appt:{min:0,max:"M"} }},
      {id:"r2", label:"掛號", a:"patient", b:"appt", expected:{ patient:{min:1,max:"1"}, appt:{min:0,max:"M"} }},
      {id:"r3", label:"隸屬", a:"dept", b:"doctor", expected:{ dept:{min:1,max:"1"}, doctor:{min:1,max:"M"} }}
    ]
  },
  {
    id:"q4",
    title:"Q4 人資資產管理",
    prompt:"觀察部門、員工、筆電、門禁卡關係。",
    rules:[
      "每位員工必屬 1 個部門；每個部門至少 1 位員工。",
      "員工可領用 0 或 1 台筆電；筆電可未分配或分配給 1 位員工。",
      "每位員工必有且僅有 1 張門禁卡；每張門禁卡只屬 1 位員工。"
    ],
    entities:[
      {id:"dept", label:"部門", x:120, y:80, w:180, h:82},
      {id:"emp", label:"員工", x:420, y:300, w:180, h:88},
      {id:"laptop", label:"筆電", x:760, y:80, w:180, h:82},
      {id:"badge", label:"門禁卡", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"配屬", a:"dept", b:"emp", expected:{ dept:{min:1,max:"M"}, emp:{min:1,max:"1"} }},
      {id:"r2", label:"領用", a:"emp", b:"laptop", expected:{ emp:{min:0,max:"1"}, laptop:{min:0,max:"1"} }},
      {id:"r3", label:"持有", a:"emp", b:"badge", expected:{ emp:{min:1,max:"1"}, badge:{min:1,max:"1"} }}
    ]
  },
  {
    id:"q5",
    title:"Q5 電商流程",
    prompt:"訂單與顧客、付款、出貨之間的關係。",
    rules:[
      "顧客可有 0 到多張訂單；每張訂單只屬 1 位顧客。",
      "訂單至少 1 筆付款，可有多筆；每筆付款只屬 1 張訂單。",
      "訂單可有 0 到多筆出貨；每筆出貨只屬 1 張訂單。"
    ],
    entities:[
      {id:"customer", label:"顧客", x:60, y:90, w:180, h:82},
      {id:"order", label:"訂單", x:410, y:300, w:180, h:88},
      {id:"payment", label:"付款", x:760, y:90, w:180, h:82},
      {id:"shipment", label:"出貨", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"下單", a:"customer", b:"order", expected:{ customer:{min:0,max:"M"}, order:{min:1,max:"1"} }},
      {id:"r2", label:"付款", a:"order", b:"payment", expected:{ order:{min:1,max:"M"}, payment:{min:1,max:"1"} }},
      {id:"r3", label:"出貨", a:"order", b:"shipment", expected:{ order:{min:0,max:"M"}, shipment:{min:1,max:"1"} }}
    ]
  },
  {
    id:"q6",
    title:"Q6 圖書館借閱",
    prompt:"使用借閱紀錄串接會員與館藏。",
    rules:[
      "會員可有 0 到多筆借閱紀錄；每筆借閱紀錄屬 1 位會員。",
      "館藏複本可有 0 到多筆借閱紀錄；每筆借閱紀錄對應 1 個複本。",
      "借閱紀錄可產生 0 或 1 筆罰款；每筆罰款必對應 1 筆借閱紀錄。"
    ],
    entities:[
      {id:"member", label:"會員", x:60, y:90, w:180, h:82},
      {id:"loan", label:"借閱紀錄", x:410, y:300, w:220, h:88},
      {id:"copy", label:"館藏複本", x:760, y:90, w:200, h:82},
      {id:"fine", label:"罰款", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"借閱", a:"member", b:"loan", expected:{ member:{min:0,max:"M"}, loan:{min:1,max:"1"} }},
      {id:"r2", label:"對應", a:"copy", b:"loan", expected:{ copy:{min:0,max:"M"}, loan:{min:1,max:"1"} }},
      {id:"r3", label:"產生", a:"loan", b:"fine", expected:{ loan:{min:0,max:"1"}, fine:{min:1,max:"1"} }}
    ]
  },
  {
    id:"q7",
    title:"Q7 專案管理",
    prompt:"判斷專案、任務、員工、工時單關係。",
    rules:[
      "專案至少包含 1 個任務；任務必屬 1 個專案。",
      "員工可被指派 0 到多個任務；任務必指派給 1 位員工。",
      "員工可填報 0 到多張工時單；工時單必屬 1 位員工。",
      "任務可對應 0 到多張工時單；工時單必屬 1 個任務。"
    ],
    entities:[
      {id:"project", label:"專案", x:80, y:80, w:180, h:82},
      {id:"task", label:"任務", x:420, y:80, w:180, h:82},
      {id:"employee", label:"員工", x:760, y:80, w:180, h:82},
      {id:"timesheet", label:"工時單", x:420, y:560, w:180, h:88}
    ],
    relationships:[
      {id:"r1", label:"分解", a:"project", b:"task", expected:{ project:{min:1,max:"M"}, task:{min:1,max:"1"} }},
      {id:"r2", label:"指派", a:"employee", b:"task", expected:{ employee:{min:0,max:"M"}, task:{min:1,max:"1"} }},
      {id:"r3", label:"填報", a:"employee", b:"timesheet", expected:{ employee:{min:0,max:"M"}, timesheet:{min:1,max:"1"} }},
      {id:"r4", label:"對應", a:"task", b:"timesheet", expected:{ task:{min:0,max:"M"}, timesheet:{min:1,max:"1"} }}
    ]
  },
  {
    id:"q8",
    title:"Q8 供應鏈採購",
    prompt:"5 實體場景：供應商、商品、採購單、倉庫、到貨單。",
    rules:[
      "倉庫可開立 0 到多張採購單；每張採購單屬 1 個倉庫。",
      "供應商可對應 0 到多張採購單；每張採購單屬 1 家供應商。",
      "商品可出現在 0 到多張採購單；每張採購單對應 1 種商品（簡化）。",
      "採購單可有 0 到多張到貨單；每張到貨單屬 1 張採購單。",
      "倉庫可有 0 到多張到貨單；每張到貨單入 1 個倉庫。"
    ],
    entities:[
      {id:"supplier", label:"供應商", x:80, y:80, w:190, h:82},
      {id:"product", label:"商品", x:420, y:80, w:180, h:82},
      {id:"po", label:"採購單", x:760, y:80, w:180, h:82},
      {id:"warehouse", label:"倉庫", x:80, y:560, w:180, h:82},
      {id:"receipt", label:"到貨單", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"開立", a:"warehouse", b:"po", expected:{ warehouse:{min:0,max:"M"}, po:{min:1,max:"1"} }},
      {id:"r2", label:"供應", a:"supplier", b:"po", expected:{ supplier:{min:0,max:"M"}, po:{min:1,max:"1"} }},
      {id:"r3", label:"品項", a:"product", b:"po", expected:{ product:{min:0,max:"M"}, po:{min:1,max:"1"} }},
      {id:"r4", label:"到貨", a:"po", b:"receipt", expected:{ po:{min:0,max:"M"}, receipt:{min:1,max:"1"} }},
      {id:"r5", label:"入庫", a:"warehouse", b:"receipt", expected:{ warehouse:{min:0,max:"M"}, receipt:{min:1,max:"1"} }}
    ]
  }
];
