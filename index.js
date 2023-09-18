function cal (perc)
{
    var bill = parseInt(document.getElementById('bill').value)
    var ppls = parseInt(document.getElementById('ppls').value)

    var ans = (perc/100 * bill)/ppls
    var k = ans.toPrecision(2)
    document.getElementById('tip_amt').innerHTML = '$'+k

    var x = (bill)/ppls
    k = x.toPrecision(2)
    document.getElementById('total_amt').innerHTML = '$'+k

}

document.addEventListener('keypress', function(){
    var cstm = document.getElementById('cstm');
    if (cstm.value != '')
    {
        var str = cstm.value
        var perc = "";
        for (var i = 0; i < str.length; i++)
        {
            if (str.charAt(i) != '%') perc += str.charAt(i)
        }
        cal(perc)
    }
})


document.getElementById('reset').addEventListener('click', (function() {
    
    document.getElementById('bill').value = '';
    document.getElementById('ppls').value = '';
    document.getElementById('cstm').value = '';
    document.getElementById('total_amt').innerHTML = "$0.00";
    document.getElementById('tip_amt').innerHTML = "$0.00";
}))