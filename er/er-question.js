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
  {id:"r1", label:"配屬", a:"dept", b:"emp", expected:{ dept:{min:1,max:"1"}, emp:{min:1,max:"M"} }},
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
    // Q5
relationships:[
  {id:"r1", label:"下單", a:"customer", b:"order", expected:{ customer:{min:1,max:"1"}, order:{min:0,max:"M"} }},
  {id:"r2", label:"付款", a:"order", b:"payment", expected:{ order:{min:1,max:"1"}, payment:{min:1,max:"M"} }},
  {id:"r3", label:"出貨", a:"order", b:"shipment", expected:{ order:{min:1,max:"1"}, shipment:{min:0,max:"M"} }}
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
    // Q6
relationships:[
  {id:"r1", label:"借閱", a:"member", b:"loan", expected:{ member:{min:1,max:"1"}, loan:{min:0,max:"M"} }},
  {id:"r2", label:"對應", a:"copy", b:"loan", expected:{ copy:{min:1,max:"1"}, loan:{min:0,max:"M"} }},
  {id:"r3", label:"產生", a:"loan", b:"fine", expected:{ loan:{min:1,max:"1"}, fine:{min:0,max:"1"} }}
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
    // Q7
relationships:[
  {id:"r1", label:"分解", a:"project", b:"task", expected:{ project:{min:1,max:"1"}, task:{min:1,max:"M"} }},
  {id:"r2", label:"指派", a:"employee", b:"task", expected:{ employee:{min:1,max:"1"}, task:{min:0,max:"M"} }},
  {id:"r3", label:"填報", a:"employee", b:"timesheet", expected:{ employee:{min:1,max:"1"}, timesheet:{min:0,max:"M"} }},
  {id:"r4", label:"對應", a:"task", b:"timesheet", expected:{ task:{min:1,max:"1"}, timesheet:{min:0,max:"M"} }}
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
    // Q8
relationships:[
  {id:"r1", label:"開立", a:"warehouse", b:"po", expected:{ warehouse:{min:1,max:"1"}, po:{min:0,max:"M"} }},
  {id:"r2", label:"供應", a:"supplier", b:"po", expected:{ supplier:{min:1,max:"1"}, po:{min:0,max:"M"} }},
  {id:"r3", label:"品項", a:"product", b:"po", expected:{ product:{min:1,max:"1"}, po:{min:0,max:"M"} }},
  {id:"r4", label:"到貨", a:"po", b:"receipt", expected:{ po:{min:1,max:"1"}, receipt:{min:0,max:"M"} }},
  {id:"r5", label:"入庫", a:"warehouse", b:"receipt", expected:{ warehouse:{min:1,max:"1"}, receipt:{min:0,max:"M"} }}
]
  },
    {
    id:"q9",
    title:"Q9 社團管理",
    prompt:"以入會紀錄串接學生與社團。",
    rules:[
      "學生可有 0 到多筆入會紀錄；每筆入會紀錄必屬 1 位學生。",
      "社團可有 0 到多筆入會紀錄；每筆入會紀錄必屬 1 個社團。",
      "教師可指導 0 到多個社團；每個社團必有 1 位指導教師。"
    ],
    entities:[
      {id:"student", label:"學生", x:60, y:90, w:180, h:82},
      {id:"membership", label:"入會紀錄", x:410, y:300, w:220, h:88},
      {id:"club", label:"社團", x:760, y:90, w:180, h:82},
      {id:"teacher", label:"教師", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"加入", a:"student", b:"membership", expected:{ student:{min:1,max:"1"}, membership:{min:0,max:"M"} }},
      {id:"r2", label:"對應", a:"club", b:"membership", expected:{ club:{min:1,max:"1"}, membership:{min:0,max:"M"} }},
      {id:"r3", label:"指導", a:"teacher", b:"club", expected:{ teacher:{min:1,max:"1"}, club:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q10",
    title:"Q10 網店下單",
    prompt:"以訂單明細作為中介實體。",
    rules:[
      "顧客可有 0 到多張訂單；每張訂單必屬 1 位顧客。",
      "訂單至少有 1 筆明細，可有多筆；每筆明細必屬 1 張訂單。",
      "商品可出現在 0 到多筆明細；每筆明細必對應 1 件商品。"
    ],
    entities:[
      {id:"customer", label:"顧客", x:60, y:90, w:180, h:82},
      {id:"order", label:"訂單", x:410, y:90, w:180, h:82},
      {id:"item", label:"訂單明細", x:410, y:560, w:220, h:88},
      {id:"product", label:"商品", x:760, y:90, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"下單", a:"customer", b:"order", expected:{ customer:{min:1,max:"1"}, order:{min:0,max:"M"} }},
      {id:"r2", label:"包含", a:"order", b:"item", expected:{ order:{min:1,max:"1"}, item:{min:1,max:"M"} }},
      {id:"r3", label:"品項", a:"product", b:"item", expected:{ product:{min:1,max:"1"}, item:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q11",
    title:"Q11 電影院售票",
    prompt:"判斷電影、場次、票券、顧客關係。",
    rules:[
      "電影可有 0 到多個場次；每個場次必屬 1 部電影。",
      "場次可售出 0 到多張票券；每張票券必屬 1 個場次。",
      "顧客可購買 0 到多張票券；每張票券必屬 1 位顧客。"
    ],
    entities:[
      {id:"movie", label:"電影", x:60, y:90, w:180, h:82},
      {id:"show", label:"場次", x:410, y:90, w:180, h:82},
      {id:"ticket", label:"票券", x:410, y:560, w:180, h:88},
      {id:"customer", label:"顧客", x:760, y:90, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"排程", a:"movie", b:"show", expected:{ movie:{min:1,max:"1"}, show:{min:0,max:"M"} }},
      {id:"r2", label:"售出", a:"show", b:"ticket", expected:{ show:{min:1,max:"1"}, ticket:{min:0,max:"M"} }},
      {id:"r3", label:"購買", a:"customer", b:"ticket", expected:{ customer:{min:1,max:"1"}, ticket:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q12",
    title:"Q12 借車服務",
    prompt:"借車單串接會員與車輛，並可產生罰款。",
    rules:[
      "會員可有 0 到多張借車單；每張借車單必屬 1 位會員。",
      "車輛可有 0 到多張借車單；每張借車單必對應 1 輛車。",
      "借車單可產生 0 或 1 筆罰款；每筆罰款必屬 1 張借車單。",
      "分店至少有 1 輛車；每輛車必屬 1 個分店。"
    ],
    entities:[
      {id:"member", label:"會員", x:60, y:90, w:180, h:82},
      {id:"rental", label:"借車單", x:410, y:300, w:180, h:88},
      {id:"car", label:"車輛", x:760, y:90, w:180, h:82},
      {id:"penalty", label:"罰款", x:760, y:560, w:180, h:82},
      {id:"branch", label:"分店", x:60, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"借用", a:"member", b:"rental", expected:{ member:{min:1,max:"1"}, rental:{min:0,max:"M"} }},
      {id:"r2", label:"對應", a:"car", b:"rental", expected:{ car:{min:1,max:"1"}, rental:{min:0,max:"M"} }},
      {id:"r3", label:"產生", a:"rental", b:"penalty", expected:{ rental:{min:1,max:"1"}, penalty:{min:0,max:"1"} }},
      {id:"r4", label:"歸屬", a:"branch", b:"car", expected:{ branch:{min:1,max:"1"}, car:{min:1,max:"M"} }}
    ]
  },
  {
    id:"q13",
    title:"Q13 餐廳訂位",
    prompt:"訂位可對應餐桌與用餐單。",
    rules:[
      "顧客可有 0 到多筆訂位；每筆訂位必屬 1 位顧客。",
      "餐桌可有 0 到多筆訂位；每筆訂位必對應 1 張餐桌。",
      "訂位可產生 0 或 1 張用餐單；每張用餐單必屬 1 筆訂位。",
      "員工可處理 0 到多張用餐單；每張用餐單必由 1 位員工處理。"
    ],
    entities:[
      {id:"customer", label:"顧客", x:60, y:90, w:180, h:82},
      {id:"reservation", label:"訂位", x:410, y:300, w:180, h:88},
      {id:"table", label:"餐桌", x:760, y:90, w:180, h:82},
      {id:"order", label:"用餐單", x:760, y:560, w:180, h:82},
      {id:"staff", label:"員工", x:60, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"預約", a:"customer", b:"reservation", expected:{ customer:{min:1,max:"1"}, reservation:{min:0,max:"M"} }},
      {id:"r2", label:"安排", a:"table", b:"reservation", expected:{ table:{min:1,max:"1"}, reservation:{min:0,max:"M"} }},
      {id:"r3", label:"產生", a:"reservation", b:"order", expected:{ reservation:{min:1,max:"1"}, order:{min:0,max:"1"} }},
      {id:"r4", label:"處理", a:"staff", b:"order", expected:{ staff:{min:1,max:"1"}, order:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q14",
    title:"Q14 醫療檢驗",
    prompt:"檢驗單可由醫師開立，並對應報告。",
    rules:[
      "病人可有 0 到多張檢驗單；每張檢驗單必屬 1 位病人。",
      "醫師可開立 0 到多張檢驗單；每張檢驗單必由 1 位醫師開立。",
      "每張檢驗單必且僅有 1 份報告；每份報告必對應 1 張檢驗單。",
      "檢驗師可完成 0 到多份報告；每份報告必由 1 位檢驗師完成。"
    ],
    entities:[
      {id:"patient", label:"病人", x:60, y:90, w:180, h:82},
      {id:"test", label:"檢驗單", x:410, y:300, w:180, h:88},
      {id:"doctor", label:"醫師", x:760, y:90, w:180, h:82},
      {id:"report", label:"報告", x:760, y:560, w:180, h:82},
      {id:"tech", label:"檢驗師", x:60, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"開單", a:"patient", b:"test", expected:{ patient:{min:1,max:"1"}, test:{min:0,max:"M"} }},
      {id:"r2", label:"開立", a:"doctor", b:"test", expected:{ doctor:{min:1,max:"1"}, test:{min:0,max:"M"} }},
      {id:"r3", label:"對應", a:"test", b:"report", expected:{ test:{min:1,max:"1"}, report:{min:1,max:"1"} }},
      {id:"r4", label:"完成", a:"tech", b:"report", expected:{ tech:{min:1,max:"1"}, report:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q15",
    title:"Q15 自修室預約",
    prompt:"預約紀錄串接學生、座位與時段。",
    rules:[
      "學生可有 0 到多筆預約；每筆預約必屬 1 位學生。",
      "座位可有 0 到多筆預約；每筆預約必對應 1 個座位。",
      "時段可有 0 到多筆預約；每筆預約必對應 1 個時段。",
      "預約可有 0 或 1 筆簽到；每筆簽到必屬 1 筆預約。"
    ],
    entities:[
      {id:"student", label:"學生", x:60, y:90, w:180, h:82},
      {id:"booking", label:"預約", x:410, y:300, w:180, h:88},
      {id:"seat", label:"座位", x:760, y:90, w:180, h:82},
      {id:"slot", label:"時段", x:60, y:560, w:180, h:82},
      {id:"checkin", label:"簽到", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"提出", a:"student", b:"booking", expected:{ student:{min:1,max:"1"}, booking:{min:0,max:"M"} }},
      {id:"r2", label:"選位", a:"seat", b:"booking", expected:{ seat:{min:1,max:"1"}, booking:{min:0,max:"M"} }},
      {id:"r3", label:"選時段", a:"slot", b:"booking", expected:{ slot:{min:1,max:"1"}, booking:{min:0,max:"M"} }},
      {id:"r4", label:"簽到", a:"booking", b:"checkin", expected:{ booking:{min:1,max:"1"}, checkin:{min:0,max:"1"} }}
    ]
  },
  {
    id:"q16",
    title:"Q16 電競賽事",
    prompt:"比賽可由裁判執法，隊伍透過參賽紀錄參賽。",
    rules:[
      "隊伍可有 0 到多筆參賽紀錄；每筆參賽紀錄必屬 1 支隊伍。",
      "比賽可有 0 到多筆參賽紀錄；每筆參賽紀錄必屬 1 場比賽。",
      "裁判可執法 0 到多場比賽；每場比賽必由 1 位裁判執法。"
    ],
    entities:[
      {id:"team", label:"隊伍", x:60, y:90, w:180, h:82},
      {id:"entry", label:"參賽紀錄", x:410, y:300, w:220, h:88},
      {id:"match", label:"比賽", x:760, y:90, w:180, h:82},
      {id:"referee", label:"裁判", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"參賽", a:"team", b:"entry", expected:{ team:{min:1,max:"1"}, entry:{min:0,max:"M"} }},
      {id:"r2", label:"對應", a:"match", b:"entry", expected:{ match:{min:1,max:"1"}, entry:{min:0,max:"M"} }},
      {id:"r3", label:"執法", a:"referee", b:"match", expected:{ referee:{min:1,max:"1"}, match:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q17",
    title:"Q17 物流配送",
    prompt:"出貨單連接訂單、倉庫、快遞員。",
    rules:[
      "訂單可有 0 到多張出貨單；每張出貨單必屬 1 張訂單。",
      "倉庫可有 0 到多張出貨單；每張出貨單必由 1 個倉庫出貨。",
      "快遞員可配送 0 到多張出貨單；每張出貨單必由 1 位快遞員配送。",
      "出貨單可有 0 或 1 筆簽收；每筆簽收必屬 1 張出貨單。"
    ],
    entities:[
      {id:"order", label:"訂單", x:60, y:90, w:180, h:82},
      {id:"shipment", label:"出貨單", x:410, y:300, w:180, h:88},
      {id:"warehouse", label:"倉庫", x:760, y:90, w:180, h:82},
      {id:"courier", label:"快遞員", x:60, y:560, w:180, h:82},
      {id:"sign", label:"簽收", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"對應", a:"order", b:"shipment", expected:{ order:{min:1,max:"1"}, shipment:{min:0,max:"M"} }},
      {id:"r2", label:"出貨", a:"warehouse", b:"shipment", expected:{ warehouse:{min:1,max:"1"}, shipment:{min:0,max:"M"} }},
      {id:"r3", label:"配送", a:"courier", b:"shipment", expected:{ courier:{min:1,max:"1"}, shipment:{min:0,max:"M"} }},
      {id:"r4", label:"簽收", a:"shipment", b:"sign", expected:{ shipment:{min:1,max:"1"}, sign:{min:0,max:"1"} }}
    ]
  },
  {
    id:"q18",
    title:"Q18 人事考勤",
    prompt:"部門、員工、考勤、請假之間的關聯。",
    rules:[
      "每位員工必屬 1 個部門；每個部門至少 1 位員工。",
      "員工可有 0 到多筆考勤紀錄；每筆考勤紀錄必屬 1 位員工。",
      "員工可有 0 到多張請假單；每張請假單必屬 1 位員工。"
    ],
    entities:[
      {id:"dept", label:"部門", x:60, y:90, w:180, h:82},
      {id:"employee", label:"員工", x:410, y:300, w:180, h:88},
      {id:"attendance", label:"考勤紀錄", x:760, y:90, w:200, h:82},
      {id:"leave", label:"請假單", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"隸屬", a:"dept", b:"employee", expected:{ dept:{min:1,max:"1"}, employee:{min:1,max:"M"} }},
      {id:"r2", label:"打卡", a:"employee", b:"attendance", expected:{ employee:{min:1,max:"1"}, attendance:{min:0,max:"M"} }},
      {id:"r3", label:"申請", a:"employee", b:"leave", expected:{ employee:{min:1,max:"1"}, leave:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q19",
    title:"Q19 線上學習",
    prompt:"報讀、課堂、學習進度關係。",
    rules:[
      "學生可有 0 到多筆報讀紀錄；每筆報讀紀錄必屬 1 位學生。",
      "課程可有 0 到多筆報讀紀錄；每筆報讀紀錄必屬 1 門課程。",
      "課程至少有 1 個課堂；每個課堂必屬 1 門課程。",
      "課堂可有 0 到多筆進度紀錄；每筆進度紀錄必屬 1 個課堂。",
      "學生可有 0 到多筆進度紀錄；每筆進度紀錄必屬 1 位學生。"
    ],
    entities:[
      {id:"student", label:"學生", x:60, y:90, w:180, h:82},
      {id:"enroll", label:"報讀紀錄", x:410, y:300, w:220, h:88},
      {id:"course", label:"課程", x:760, y:90, w:180, h:82},
      {id:"lesson", label:"課堂", x:60, y:560, w:180, h:82},
      {id:"progress", label:"進度紀錄", x:760, y:560, w:220, h:82}
    ],
    relationships:[
      {id:"r1", label:"報讀", a:"student", b:"enroll", expected:{ student:{min:1,max:"1"}, enroll:{min:0,max:"M"} }},
      {id:"r2", label:"對應", a:"course", b:"enroll", expected:{ course:{min:1,max:"1"}, enroll:{min:0,max:"M"} }},
      {id:"r3", label:"包含", a:"course", b:"lesson", expected:{ course:{min:1,max:"1"}, lesson:{min:1,max:"M"} }},
      {id:"r4", label:"課堂進度", a:"lesson", b:"progress", expected:{ lesson:{min:1,max:"1"}, progress:{min:0,max:"M"} }},
      {id:"r5", label:"學生進度", a:"student", b:"progress", expected:{ student:{min:1,max:"1"}, progress:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q20",
    title:"Q20 旅行團預訂",
    prompt:"預訂、付款、導遊與旅行團。",
    rules:[
      "顧客可有 0 到多筆預訂；每筆預訂必屬 1 位顧客。",
      "旅行團可有 0 到多筆預訂；每筆預訂必屬 1 個旅行團。",
      "每筆預訂至少 1 筆付款，可有多筆；每筆付款必屬 1 筆預訂。",
      "導遊可帶領 0 到多個旅行團；每個旅行團必有 1 位導遊。"
    ],
    entities:[
      {id:"customer", label:"顧客", x:60, y:90, w:180, h:82},
      {id:"booking", label:"預訂", x:410, y:300, w:180, h:88},
      {id:"tour", label:"旅行團", x:760, y:90, w:180, h:82},
      {id:"payment", label:"付款", x:760, y:560, w:180, h:82},
      {id:"guide", label:"導遊", x:60, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"建立", a:"customer", b:"booking", expected:{ customer:{min:1,max:"1"}, booking:{min:0,max:"M"} }},
      {id:"r2", label:"報名", a:"tour", b:"booking", expected:{ tour:{min:1,max:"1"}, booking:{min:0,max:"M"} }},
      {id:"r3", label:"付款", a:"booking", b:"payment", expected:{ booking:{min:1,max:"1"}, payment:{min:1,max:"M"} }},
      {id:"r4", label:"帶領", a:"guide", b:"tour", expected:{ guide:{min:1,max:"1"}, tour:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q21",
    title:"Q21 健身中心",
    prompt:"會員、課堂、預約、會員卡。",
    rules:[
      "每位會員必有且僅有 1 張會員卡；每張會員卡只屬 1 位會員。",
      "會員可有 0 到多筆課堂預約；每筆預約必屬 1 位會員。",
      "課堂可有 0 到多筆課堂預約；每筆預約必屬 1 個課堂。",
      "教練可教授 0 到多個課堂；每個課堂必由 1 位教練教授。"
    ],
    entities:[
      {id:"member", label:"會員", x:60, y:90, w:180, h:82},
      {id:"card", label:"會員卡", x:410, y:90, w:180, h:82},
      {id:"booking", label:"課堂預約", x:410, y:560, w:220, h:88},
      {id:"class", label:"課堂", x:760, y:90, w:180, h:82},
      {id:"coach", label:"教練", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"持有", a:"member", b:"card", expected:{ member:{min:1,max:"1"}, card:{min:1,max:"1"} }},
      {id:"r2", label:"預約", a:"member", b:"booking", expected:{ member:{min:1,max:"1"}, booking:{min:0,max:"M"} }},
      {id:"r3", label:"對應", a:"class", b:"booking", expected:{ class:{min:1,max:"1"}, booking:{min:0,max:"M"} }},
      {id:"r4", label:"教授", a:"coach", b:"class", expected:{ coach:{min:1,max:"1"}, class:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q22",
    title:"Q22 校園器材借用",
    prompt:"借用單連接學生與器材。",
    rules:[
      "學生可有 0 到多張借用單；每張借用單必屬 1 位學生。",
      "器材可有 0 到多張借用單；每張借用單必對應 1 件器材。",
      "借用單可有 0 或 1 筆歸還紀錄；每筆歸還紀錄必屬 1 張借用單。",
      "管理員可管理 0 到多件器材；每件器材必由 1 位管理員管理。"
    ],
    entities:[
      {id:"student", label:"學生", x:60, y:90, w:180, h:82},
      {id:"borrow", label:"借用單", x:410, y:300, w:180, h:88},
      {id:"equipment", label:"器材", x:760, y:90, w:180, h:82},
      {id:"returnRec", label:"歸還紀錄", x:760, y:560, w:220, h:82},
      {id:"staff", label:"管理員", x:60, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"借用", a:"student", b:"borrow", expected:{ student:{min:1,max:"1"}, borrow:{min:0,max:"M"} }},
      {id:"r2", label:"對應", a:"equipment", b:"borrow", expected:{ equipment:{min:1,max:"1"}, borrow:{min:0,max:"M"} }},
      {id:"r3", label:"歸還", a:"borrow", b:"returnRec", expected:{ borrow:{min:1,max:"1"}, returnRec:{min:0,max:"1"} }},
      {id:"r4", label:"管理", a:"staff", b:"equipment", expected:{ staff:{min:1,max:"1"}, equipment:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q23",
    title:"Q23 銀行帳務",
    prompt:"帳戶、交易、分行與爭議單。",
    rules:[
      "客戶可有 0 到多個帳戶；每個帳戶必屬 1 位客戶。",
      "帳戶可有 0 到多筆交易；每筆交易必屬 1 個帳戶。",
      "分行可有 0 到多個帳戶；每個帳戶必屬 1 個分行。",
      "交易可有 0 或 1 張爭議單；每張爭議單必屬 1 筆交易。"
    ],
    entities:[
      {id:"customer", label:"客戶", x:60, y:90, w:180, h:82},
      {id:"account", label:"帳戶", x:410, y:300, w:180, h:88},
      {id:"tx", label:"交易", x:760, y:90, w:180, h:82},
      {id:"branch", label:"分行", x:60, y:560, w:180, h:82},
      {id:"dispute", label:"爭議單", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"開戶", a:"customer", b:"account", expected:{ customer:{min:1,max:"1"}, account:{min:0,max:"M"} }},
      {id:"r2", label:"產生", a:"account", b:"tx", expected:{ account:{min:1,max:"1"}, tx:{min:0,max:"M"} }},
      {id:"r3", label:"隸屬", a:"branch", b:"account", expected:{ branch:{min:1,max:"1"}, account:{min:0,max:"M"} }},
      {id:"r4", label:"申訴", a:"tx", b:"dispute", expected:{ tx:{min:1,max:"1"}, dispute:{min:0,max:"1"} }}
    ]
  },
  {
    id:"q24",
    title:"Q24 飯店入住",
    prompt:"訂房、入住與員工處理流程。",
    rules:[
      "住客可有 0 到多筆訂房；每筆訂房必屬 1 位住客。",
      "房間可有 0 到多筆訂房；每筆訂房必對應 1 間房間。",
      "訂房可有 0 或 1 筆入住紀錄；每筆入住紀錄必屬 1 筆訂房。",
      "員工可處理 0 到多筆入住紀錄；每筆入住紀錄必由 1 位員工處理。"
    ],
    entities:[
      {id:"guest", label:"住客", x:60, y:90, w:180, h:82},
      {id:"reservation", label:"訂房", x:410, y:300, w:180, h:88},
      {id:"room", label:"房間", x:760, y:90, w:180, h:82},
      {id:"checkin", label:"入住紀錄", x:760, y:560, w:220, h:82},
      {id:"staff", label:"員工", x:60, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"預訂", a:"guest", b:"reservation", expected:{ guest:{min:1,max:"1"}, reservation:{min:0,max:"M"} }},
      {id:"r2", label:"安排", a:"room", b:"reservation", expected:{ room:{min:1,max:"1"}, reservation:{min:0,max:"M"} }},
      {id:"r3", label:"入住", a:"reservation", b:"checkin", expected:{ reservation:{min:1,max:"1"}, checkin:{min:0,max:"1"} }},
      {id:"r4", label:"辦理", a:"staff", b:"checkin", expected:{ staff:{min:1,max:"1"}, checkin:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q25",
    title:"Q25 社交平台",
    prompt:"貼文、留言、使用者關係。",
    rules:[
      "使用者可有 0 到多則貼文；每則貼文必屬 1 位使用者。",
      "使用者可有 0 到多則留言；每則留言必屬 1 位使用者。",
      "貼文可有 0 到多則留言；每則留言必屬 1 則貼文。"
    ],
    entities:[
      {id:"user", label:"使用者", x:60, y:90, w:180, h:82},
      {id:"post", label:"貼文", x:410, y:90, w:180, h:82},
      {id:"comment", label:"留言", x:760, y:90, w:180, h:82},
      {id:"tag", label:"標籤(干擾)", x:410, y:560, w:220, h:88}
    ],
    relationships:[
      {id:"r1", label:"發表", a:"user", b:"post", expected:{ user:{min:1,max:"1"}, post:{min:0,max:"M"} }},
      {id:"r2", label:"留言者", a:"user", b:"comment", expected:{ user:{min:1,max:"1"}, comment:{min:0,max:"M"} }},
      {id:"r3", label:"留言於", a:"post", b:"comment", expected:{ post:{min:1,max:"1"}, comment:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q26",
    title:"Q26 停車場管理",
    prompt:"車輛進場、收費與場區關聯。",
    rules:[
      "車輛可有 0 到多張停車票；每張停車票必屬 1 輛車。",
      "場區可有 0 到多張停車票；每張停車票必屬 1 個場區。",
      "停車票可有 0 或 1 筆付款；每筆付款必屬 1 張停車票。",
      "員工可管理 0 到多個場區；每個場區必由 1 位員工管理。"
    ],
    entities:[
      {id:"car", label:"車輛", x:60, y:90, w:180, h:82},
      {id:"ticket", label:"停車票", x:410, y:300, w:180, h:88},
      {id:"lot", label:"場區", x:760, y:90, w:180, h:82},
      {id:"payment", label:"付款", x:760, y:560, w:180, h:82},
      {id:"staff", label:"員工", x:60, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"入場", a:"car", b:"ticket", expected:{ car:{min:1,max:"1"}, ticket:{min:0,max:"M"} }},
      {id:"r2", label:"對應", a:"lot", b:"ticket", expected:{ lot:{min:1,max:"1"}, ticket:{min:0,max:"M"} }},
      {id:"r3", label:"收費", a:"ticket", b:"payment", expected:{ ticket:{min:1,max:"1"}, payment:{min:0,max:"1"} }},
      {id:"r4", label:"管理", a:"staff", b:"lot", expected:{ staff:{min:1,max:"1"}, lot:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q27",
    title:"Q27 圖書館活動",
    prompt:"活動報名與場地安排。",
    rules:[
      "會員可有 0 到多筆報名；每筆報名必屬 1 位會員。",
      "活動可有 0 到多筆報名；每筆報名必屬 1 個活動。",
      "房間可有 0 到多個活動；每個活動必在 1 個房間舉行。",
      "職員可有 0 到多個活動；每個活動必由 1 位職員負責。"
    ],
    entities:[
      {id:"member", label:"會員", x:60, y:90, w:180, h:82},
      {id:"reg", label:"報名", x:410, y:300, w:180, h:88},
      {id:"event", label:"活動", x:760, y:90, w:180, h:82},
      {id:"room", label:"房間", x:60, y:560, w:180, h:82},
      {id:"staff", label:"職員", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"報名", a:"member", b:"reg", expected:{ member:{min:1,max:"1"}, reg:{min:0,max:"M"} }},
      {id:"r2", label:"對應", a:"event", b:"reg", expected:{ event:{min:1,max:"1"}, reg:{min:0,max:"M"} }},
      {id:"r3", label:"舉行於", a:"room", b:"event", expected:{ room:{min:1,max:"1"}, event:{min:0,max:"M"} }},
      {id:"r4", label:"負責", a:"staff", b:"event", expected:{ staff:{min:1,max:"1"}, event:{min:0,max:"M"} }}
    ]
  },
  {
    id:"q28",
    title:"Q28 二手交易平台",
    prompt:"上架、下單、付款流程。",
    rules:[
      "賣家可有 0 到多個上架商品；每個上架商品必屬 1 位賣家。",
      "買家可有 0 到多張訂單；每張訂單必屬 1 位買家。",
      "上架商品可對應 0 到多張訂單；每張訂單對應 1 個上架商品（簡化）。",
      "每張訂單必且僅有 1 筆付款；每筆付款必屬 1 張訂單。"
    ],
    entities:[
      {id:"seller", label:"賣家", x:60, y:90, w:180, h:82},
      {id:"listing", label:"上架商品", x:410, y:90, w:220, h:82},
      {id:"buyer", label:"買家", x:760, y:90, w:180, h:82},
      {id:"order", label:"訂單", x:410, y:560, w:180, h:88},
      {id:"payment", label:"付款", x:760, y:560, w:180, h:82}
    ],
    relationships:[
      {id:"r1", label:"上架", a:"seller", b:"listing", expected:{ seller:{min:1,max:"1"}, listing:{min:0,max:"M"} }},
      {id:"r2", label:"下單", a:"buyer", b:"order", expected:{ buyer:{min:1,max:"1"}, order:{min:0,max:"M"} }},
      {id:"r3", label:"購買標的", a:"listing", b:"order", expected:{ listing:{min:1,max:"1"}, order:{min:0,max:"M"} }},
      {id:"r4", label:"付款", a:"order", b:"payment", expected:{ order:{min:1,max:"1"}, payment:{min:1,max:"1"} }}
    ]
  }
];
