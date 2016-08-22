window.pageRoutes = [
  {
    "user": ["login", "join", "withdraw"]
  },
  {
    "contract": ["page1", "page2"]
  }
];


window.pageRoutes2 = [
  {
    "title": "사용자", "route": "user", "routes": [
      { "title": "회원가입", "route": "join" },
      { "title": "로그인", "route": "login" },
      { "title": "탈퇴", "route": "withdraw" }
    ]
  },
  {
    "title": "계약", "route": "contract", "routes": [
      { "title": "페이지1", "route": "page1" },
      { "title": "페이지2", "route": "page2" },
    ]
  }
];
