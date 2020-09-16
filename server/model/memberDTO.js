class MemberDTO{
    constructor(){
        this.memno;
        this.id;
        this.pw;
        this.mname;
    }

    getMemno(){
        return this.memno;
    }
    setMemno(memno){
        this.memno = memno;
    }

    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }

    getPw(){
        return this.pw;
    }
    setPw(pw){
        this.pw = pw;
    }

    getMname(){
        return this.mname;
    }
    setMname(mname){
        this.mname = mname;
    }

}