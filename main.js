function have_fun(num){
    let cnt=1;
    let str=num+"";
    let temp_arr=[];
    for(let i=0;i<str.length;i++){
        if(parseInt(str.substr(i,2))<=26&&str.substr(i,2).length===2){
            cnt++;
            temp_arr.push({start:i,end:i+1});
        }
    }
    for(let i=2;i<=temp_arr.length;i++){
        cnt+=zuhe(temp_arr,i);
    }
    console.log(cnt);
}

function zuhe(arr,rest){
    if(rest===1){
        return arr.length;
    }
    let cnt=0;
    for(let i=0;i<arr.length;i++){
        cnt+=zuhe(arr.filter((value,index,arr)=>{
            if(index<=i){
                return false;
            }
            if(arr[i].end>=value.start){
                return false;
            }
            return true;
        }),rest-1);
    }
    return cnt;
}


have_fun(1234121221);
have_fun(1212);