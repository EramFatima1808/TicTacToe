var turn=0;
var values=[0,0,0,0,0,0,0,0,0,0];
var lock='open';
function clicked(btn)
{
    var button=document.getElementById("b"+btn);
    if(turn>=8 && lock=='open')
    {
        document.getElementById("user").textContent="XO Game Draw...";
    }
    switch (turn%2) {
        case 1:
            if(values[btn]==0 && lock=='open')
            {
                document.getElementById("user").textContent="User O's Turn";
                turn++;
                button.setAttribute('value','X');
                values[btn]=1;    
                checkWin(btn,'X');    
            }
            break;
        case 0:
            if(values[btn]==0  && lock=='open')
            {
                document.getElementById("user").textContent="User X's Turn";
                turn++;
                button.setAttribute('value','O');
                values[btn]=2;
                checkWin(btn,'O');
            }        
            break;    
        default:
            break;
    }
}
function clearCells()
{
    turn=0;
    values=[0,0,0,0,0,0,0,0,0,0];
    lock='open';
    for(i=1; i<10; i++)
    {
        var button=document.getElementById("b"+i);
        button.setAttribute('value'," ");
        console.log("Clicked Clear");
    }
}
function checkWin(btn,xo)
{
    var n;
    if(xo=='O')
        n=2;
    else if(xo=='X')
        n=1;
    if(lock=='open')
    {
        if(values[1]==n && values[2]==n && values[3]==n)
        {
            console.log(xo+' Has Won...');
            document.getElementById("user").textContent="User "+xo+" Won";
            lock='lock';
        }
            
        else if(values[1]==n && values[4]==n && values[7]==n)
        {
            document.getElementById("user").textContent="User "+xo+" Won";
            lock='lock';
        }
        else if(values[1]==n && values[5]==n && values[9]==n)
        {
            document.getElementById("user").textContent="User "+xo+" Won";
            lock='lock';
        }
        else if(values[2]==n && values[5]==n && values[8]==n)
        {
            document.getElementById("user").textContent="User "+xo+" Won";
            lock='lock';
        }
        else if(values[4]==n && values[5]==n && values[6]==n)
        {
            document.getElementById("user").textContent="User "+xo+" Won";
            lock='lock';
        }
        else if(values[3]==n && values[5]==n && values[7]==n)
        {
            document.getElementById("user").textContent="User "+xo+" Won";
            lock='lock';
        }
        else if(values[3]==n && values[6]==n && values[9]==n)
        {
            document.getElementById("user").textContent="User "+xo+" Won";
            lock='lock';
        }
        else if(values[7]==n && values[8]==n && values[9]==n)
        {
            document.getElementById("user").textContent="User "+xo+" Won";
            lock='lock';
        }
    }
}