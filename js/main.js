// alert('You can find sample content in Second semested >> Data structures and algorithms.')
// alert('Github: @ishaanmehta4\nEmail: ishaanmehta4@gmail.com')



var colors=["rgb(72, 83, 201)","rgb(109, 35, 51)","rgb(0, 131, 81)","rgb(112, 62, 248"];
var m = Math.floor(Math.random() * 3);
var accent=colors[m];
document.getElementById("web").style.backgroundColor=accent;
document.getElementsByClassName("addvideo")[0].style.backgroundColor=accent;
for(var i=0;i<13;i++)
{
    document.getElementsByClassName("subjectbtn")[i].style.backgroundColor=accent;
}
document.getElementsByClassName("formsubmit")[0].style.backgroundColor=accent;

var css=".subjectname {color:"+accent+";}  .subjectname:hover {background-color: "+accent+";} input:active {border-color: "+accent+";}";

var subnames=[];
subnames[1]=["Fundamentals of Computers and Programming", "English and Communiacation Skills", "Engineering Physics", "Electrical Networks", "Engineering Mathematics", "ICT Workshop-1"];
subnames[2]=["Data Structures and algorithms", "Electronic Devices and Circuits" ,"Engineering Mechanics", "Digital Logic Design", "Discrete Mathematics", "Signals and Systems"];
subnames[3]=["Computer Organization", "Microprocessor and Interfacing", "Communication Engineering","Automata Formal Languages", "Electronic Circuits", "Probability and Statistical Analysis"];
subnames[4]=["Operating systems", "Computer networks","Database management system","object oriented technology","system software","design and analysis of algorithms"];
subnames[5]=["operating systems","computer networks","analogue circuits","digital communication","microcontrollers","electromagnetic waves"];
subnames[6]=["Software enginnering","computer graphics","digital signal processing","economics and bussiness management","numerical methods using python","fuzzy logic and neural network"];
subnames[7]=["control system","digital integrated circuit","digital signal processing","economics and bussiness management","numerical methods using python","fuzzy logic and neural network"];
subnames[8]=['intorduction to machine learning','high performance computing','web engineering','advance DBMS','cloud computing and big data infrastructure','augmented and virtual reality'];
subnames[9]=['intorduction to machine learning','digital VLSI design','web engineering','embedded systems','cloud computing and big data infrastructure','augmented and virtual reality'];
subnames[10]=['currently unavailable','currently unavailable','currently unavailable','currently unavailable','currently unavailable','currently unavailable'];
subnames[11]=['currently unavailable','currently unavailable','currently unavailable','currently unavailable','currently unavailable','currently unavailable'];
subnames[12]=['currently unavailable','currently unavailable','currently unavailable','currently unavailable','currently unavailable','currently unavailable'];
subnames[13]=['currently unavailable','currently unavailable','currently unavailable','currently unavailable','currently unavailable','currently unavailable'];
var xx;

function extendtop(x)
{
    xx=x;
    var p=document.getElementById("subjectpanel").style;
    var q=document.getElementsByClassName("bottomgrid")[0].style;
    p.zIndex="7";
    p.display="block";
    p.opacity="1";
    document.getElementById("year1").style.filter="blur(10px)";
    document.getElementById("year2").style.filter="blur(10px)";
    document.getElementById("year3").style.filter="blur(10px)";
    document.getElementById("year4").style.filter="blur(10px)";

    var year="";
    if(x==1)
    {
        year="first semester.";
    }
    if(x==2)
    {
        year="second semester.";
    }
    if(x==3)
    {
        year="third semester.";
    }
    if(x==4)
    {
        year="fourth semester (CSE).";
    }
    if(x==5)
    {
        year="fourth semester (ECE)";
    }
    if(x==6)
    {
        year="fifth semester (CSE).";
    }
    if(x==7)
    {
        year="fifth semester (ECE).";
    }
    if(x==8)
    {
        year="sixth semester (CSE).";
    }
    if(x==9)
    {
        year="sixth semester (ECE).";
    }
    if(x==10)
    {
        year="seventh semester (CSE).";
    }
    if(x==11)
    {
        year="seventh semester (ECE).";
    }
    if(x==12)
    {
        year="eighth semester (CSE).";
    }
    if(x==13)
    {
        year="eighth semester (ECE).";
    }

    document.getElementsByClassName("iamstudentof")[0].innerHTML="<i class='icon pr btnhover ptr fas fa-chevron-circle-left' onClick='reloadpg()'></i>   I am a student of "+year;
    // document.getElementsByClassName("icon")[2].style.color=accent;
    // document.getElementsByClassName("icon")[2].style.color="rgb(72, 72, 72)";
    for(var i=0;i<6;i++)
    {
        document.getElementsByClassName("subjectname")[i].style.display="block";
        document.getElementsByClassName("subjectname")[i].innerHTML=subnames[x][i]+"<i class='icon fas fa-chevron-right'></i>";
    }
    document.getElementById("custom").innerHTML=css;
    for(var i=0;i<6;i++)
    {
        document.getElementsByClassName("subanchor")[i].href="study.html?subject="+encodeURI(subnames[x][i])+"&accent="+m;
    }
   
}//end of extendtop fn
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
function openform()
{
    if(window.innerWidth>900)
    document.getElementsByClassName("form")[0].style.marginLeft="70vw";
   else
   {
    document.getElementsByClassName("form")[0].style.marginLeft="10vw";
    document.getElementsByClassName("form")[0].style.width="90vw";
   }

   var n="";
   for(let i=1;i<=9;i++)
   {
       for(let j=0;j<6;j++)
       {
           n+='<option value="'+capital_letter(subnames[i][j])+'">';
       }
   }
   document.getElementById("subl").innerHTML=n;

}

function closeform()
{
    document.getElementsByClassName("form")[0].style.marginLeft="100vw";
}

function reloadpg()
{
    console.log('pp');
    window.location.reload();
}


