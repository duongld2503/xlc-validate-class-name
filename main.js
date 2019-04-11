function checkClass(str) {
    regClass = /^[C,A,P]+[0-9]{4}[G,H,I,J,K,L,M]$/
    if (regClass.test(str)){
        console.log("true")
    } else {
        console.log("false")
    }
}