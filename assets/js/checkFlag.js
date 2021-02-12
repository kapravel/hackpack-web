function checkFlag(id) {
    let flag_input = document.getElementById(id + "-flag");
    let flag = flag_input.value;
    let actual_MD5 = document.getElementById(id + "-flag_MD5").innerText;
    let flag_MD5 = hex_md5(flag);
    
    if(flag_MD5 == actual_MD5) {
        flag_input.className = "form-control is-valid";
    } else {
        flag_input.className = "form-control is-invalid";
    }
}