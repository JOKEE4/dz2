const bank = {
    balance: 55555,
    cache: 'kg',
    count:{
        name: 'joldubek',
        address:"kg city bishkek"

    }
}
const svetafor = prompt(' colors: red , green , yellow')


function color (){
    if (svetafor === 'red'){
    alert('stop')
    }
    else if(svetafor === 'green'){
        alert('go')
    }
    else if(svetafor === 'yellow'){
        alert('wait')
    }
    else {
        alert('error')
    }
}

color()

const customerCardType = prompt('UNINST, GOLD, RIA,')

switch (customerCardType) {
  case "UNINST":
    console.log("Send request to UNINST processing");
    break;
    case "GOLD":
    console.log("Send request to GOLD processing");
    break;
  case "RIA":
    console.log("Send request to RIA processing");
    break;
  default:
    console.warn("Unknown card processing...");
}
