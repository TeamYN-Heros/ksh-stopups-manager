// 사용자 등록 시
document.querySelector(".loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const adminLoginId = e.target.adminLoginId.value;
  const adminLoginPw = e.target.adminLoginPw.value;
  if (!adminLoginId || !adminLoginPw) {
    return alert("정보를 입력해주세요");
  }
  const res = await axios.get("/admins");
  const admins = res.data;

  admins.find((element) => {
    if (element.adminId === adminLoginId && element.adminPw === adminLoginPw) {
      sessionStorage.setItem("accessToken", element.adminToken);
    }
  });
  e.target.adminLoginId.value = "";
  e.target.adminLoginPw.value = "";
  window.location.href = "/home";
});
