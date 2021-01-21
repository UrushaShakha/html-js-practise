let counter=0;

function sum(){
    counter=counter+1;
    document.getElementById('number-id').innerHTML=counter;
}

function sub()
{
    if(counter>0)
    {
        counter=counter-1;
        document.getElementById('number-id').innerHTML=counter;
    }
}