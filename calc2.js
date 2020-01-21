const btns=document.querySelectorAll("button");
let mylist=document.getElementById("mylist");
let snumber = 0;
let list=()=>
    {
    let carray=JSON.parse(localStorage.getItem('firstarray'));
    console.log(carray);
    if(carray != null)
    {
        carray.forEach(function(P){
        let li=document.createElement("li");
        li.textContent=P;
        mylist.appendChild(li);    
    });
    }
}
list();

let arr=[];
let temp=[];
let finalarray=[];
let total=0;
let finalhistory=[];
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        value=event.target.value;
        
        if(arr.length == 1){
            snumber=arr[1];
        }
        else

        {  
            if(snumber.length >= 10)
            {
                alert("max length")
            }
            else
            {
                snumber=document.getElementById("text").value+=value;
                let patt = /^\d+\.\d+\.$/g;
                let pattern=/^\d+\.\.$/g;

                if(patt.test(snumber.toString())){
                alert("wrong input")
                value="c";
            }
            
            if(pattern.test(snumber.toString())){
                alert("wrong input")
                value="c";
            }
        }
            
        }

        if(value=="+" || value=="-" || value=="*" || value=="/" || value=="exponent")
            {   
                document.getElementById("text").focus();
                let ans=convertertofloat(snumber);
                arr.push(ans);
                temp.push(ans);
                snumber=0;
                ans=0;
                let operation=value;
                arr.push(operation);
                temp.push(operation);
                document.getElementById("text").value="";
                document.getElementById("text").placeholder="0";
                document.getElementById("text").autofocus;
            }
            if(value =="=")
            {
                this.snumber= document.getElementById("text").value+=value; 
                let ans=convertertofloat(snumber);
                arr.push(ans);
                temp.push(ans);
                snumber=0;
                ans=0;
                let operation=value;
                arr.push(operation);
                temp.push(operation);
                total=arr[0];
                for(let i=0;i<=arr.length;i++)
                {
                    if(arr[i]=="+")
                    {
                        total=add(total,arr[i+1]);
                    }
                    if(arr[i]=="-")
                    {
                            total=minus(total,arr[i+1]);
                    }
                    if(arr[i]=="*")
                    {
                            total=mul(total,arr[i+1]);
                    }
                    if(arr[i]=="/")
                    {
                            total=devide(total,arr[i+1]);
                    }
                    if(arr[i]=="exponent")
                    {
                        total=exponent(total,arr[i+1]);
                    }
                }
                tostringconvert(arr,total);
                document.getElementById("text").value=total;
                
            }
            if(value=="cube")
            {
                if(arr.length != 0)
                {
                    ans=arr[0];
                }
                else
                {
                ans=convertertofloat(snumber);
                arr.push(`cube(${ans})`);
                }
                let cube_total=cube(ans);
                snumber=cube_total;
                document.getElementById("text").value=cube_total;
                tostringconvert(arr,cube_total);
            }
            if(value=="square")
            {
                if(arr.length != 0)
                {
                    ans=arr[0];
                }
                else
                {
                ans=convertertofloat(snumber);
                arr.push(`square(${ans})`);
                }
                let square_total=square(ans);
                snumber=square_total;
                document.getElementById("text").value=square_total;
                tostringconvert(arr,square_total);
            }
            if(value=="root")
            {
                if(arr.length != 0)
                {
                    ans=arr[0];
                }
                else
                {
                ans=convertertofloat(snumber);
                arr.push(`root(${ans})`);
                }
                let root_total=root(ans);
                snumber=root_total;
                document.getElementById("text").value=root_total;
                tostringconvert(arr,root_total);
            }
            if(value=="fac")
            {
                if(arr.length != 0)
                {
                    ans=arr[0];
                }
                else
                {
                ans=convertertofloat(snumber);
                arr.push(`fac(${ans})`);
                }
                let fac_total=fac(ans);
                snumber=fac_total;
                document.getElementById("text").value=fac_total;
                tostringconvert(arr,fac_total);
            }
            if(value == "c")
            {
                snumber=0;
                document.getElementById("text").value="";
                document.getElementById("text").placeholder="0";

                arr=[];
                total=0;
                document.getElementById("text").focus();
            }
            if(value=="delete")
            {
                finalarray=[];
                while (mylist.hasChildNodes()) {  
                    mylist.removeChild(mylist.firstChild);
                  }
                  document.getElementById("text").value=0;
                  let sfinalarray=JSON.stringify(finalarray);
                    document.getElementById("text").autofocus;
                  localStorage.removeItem('firstarray');
            }
    

    });
});
let tostringconvert=(temp,total)=>{
        temp.push(total);
        console.log(temp);
        let x = temp.toString();
        let y= x.replace(/,/g," ");
        temp.length=0;
        let stemp=[];
        stemp.push(y);
        console.log(stemp);
        let finalpush=JSON.stringify(stemp);
        let local=JSON.parse(localStorage.getItem('firstarray'));
        if(local==null)
        {
            localStorage.setItem('firstarray',finalpush);
        }
        else
        {
           local.push(stemp);
           let t=JSON.stringify(local);
           localStorage.setItem('firstarray',t);
        }
        let carray=JSON.parse(localStorage.getItem('firstarray'));
        if(carray != null)
    {
         let li=document.createElement("li");
            stemp.forEach(function(s){
            li.textContent=s;
             mylist.appendChild(li);    
        });
        while(carray.length > 10)
        {
            carray.shift();
             mylist.firstChild.remove();
            let rfinalarray=JSON.stringify(carray);
            localStorage.setItem('firstarray',rfinalarray);
        }
    }

}
let convertertofloat=(snumber)=>{
    let number=parseFloat(snumber);
    return number;
}
let add=(num1,num2)=>{return num1+num2};
let minus=(num1,num2)=>{return num1-num2};
let mul=(num1,num2)=>{return num1*num2};
let devide=(num1,num2)=>{return num1/num2};
let cube = num =>{return num *num*num};
let square= num =>{return num *num};
let root = num=>{return Math.sqrt(num)};
let fac=num=>{
    let factotal=1;
    for(let i=num;i>1;i--)
    {
        factotal =factotal * i;
    }
    return factotal;
}
let exponent=(x,n)=>{
    let temp=x;
    for(let i=1;i<n;i++)
    {
        temp=temp*x;
    }
    return temp;
}
let isNumber =evt =>{
    var charCode = evt.keyCode;

   console.log(charCode);
   if ((charCode > 47  && charCode<58)|| charCode == 46)
   {
    let nnumber=document.getElementById("text").value;
                let patt = /^\d+\.\d+\.$/g;
                let pattern=/^\d+\.\.$/g;
                console.log(nnumber);
                nnumber= nnumber.toString();
                if(patt.test(nnumber)){
                checkvalue(nnumber);
                }
            
                if(pattern.test(nnumber.toString())){
                    checkvalue(nnumber);
                }
                else true;
   }
     else 
    {
        if(charCode==13)
    {
        document.getElementById('equal').click();
    }
    if(charCode==42)
    {
        document.getElementById('multiply').click();
    }
    if(charCode==43)
    {
        document.getElementById('plus').click();
    }
    if(charCode==45)
    {
        
        document.getElementById('minus').click();
    }
    if(charCode==47)
    {
        document.getElementById('devide').click();
    }
        return false;
    }
}
let checkvalue =(nnumber)=>{
    nnumber=nnumber.substring(0,nnumber.length-1);
    document.getElementById("text").value=nnumber;
}