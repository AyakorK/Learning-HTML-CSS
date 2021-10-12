A1P1 = document.getElementsByClassName('avis')[0];
A2P1 = document.getElementsByClassName('avis')[1];
A1P2 = document.getElementsByClassName('avisp2')[0];
A2P2 = document.getElementsByClassName('avisp2')[1];
L1 = document.getElementsByClassName('line1')[0];
L2 = document.getElementsByClassName('line2')[0];
L3 = document.getElementsByClassName('line3')[0];
L4 = document.getElementsByClassName('line4')[0];
FIP = document.getElementsByClassName('Switch')[0]
SIP = document.getElementsByClassName('Switch')[1]

FIP.addEventListener('click', () => {
    if (A1P2.style.visibility == 'visible' && A1P1.style.visibility == 'hidden') {
        A1P2.style.visibility = 'hidden';
        A1P1.style.visibility = 'visible';
    } else {
        A1P2.style.visibility = 'visible';
        A1P1.style.visibility = 'hidden';
    }
    if (A2P2.style.visibility == 'visible' && A2P1.style.visibility == 'hidden') {
        A2P2.style.visibility = 'hidden';
        A2P1.style.visibility = 'visible';
    } else {
        A2P2.style.visibility = 'visible';
        A2P1.style.visibility = 'hidden';
    }
});

SIP.addEventListener('click', () => {
    if (L1.style.visibility == 'visible') {
        L1.style.visibility = 'hidden';
        L2.style.visibility = 'visible';
    } else if (L2.style.visibility == 'visible') {
        L2.style.visibility = 'hidden';
        L3.style.visibility = 'visible';
    } else if (L3.style.visibility == 'visible') {
        L3.style.visibility = 'hidden';
        L4.style.visibility = 'visible';
    } else {
        L4.style.visibility = 'hidden';
        L1.style.visibility = 'visible';
    }

});