// 사용자 등록 시
document
  .querySelector(".registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const adminId = e.target.adminId.value;
    const adminPw = e.target.adminPw.value;
    const adminName = e.target.adminName.value;
    const adminToken = Math.floor(Date.now() + Math.random() * 1000);
    if (!adminId || !adminPw || !adminName || !adminName) {
      return alert("정보를 입력해주세요");
    }
    const res = await axios.get("/admins");
    const admins = res.data;

    const found = admins.find((element) => element.adminName === adminName);
    if (found) {
      alert("이미 가입된 관리자 계정입니다.");
    } else {
      try {
        await axios.post("admins", { adminId, adminPw, adminName, adminToken });
        sessionStorage.setItem("accessToken", adminToken);
      } catch (err) {
        console.error(err);
      }
      e.target.adminId.value = "";
      e.target.adminPw.value = "";
      e.target.adminName.value = "";
      window.location.href = "/";
    }
  });
