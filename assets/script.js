A1P1 = document.getElementsByClassName('avis')[0];
A2P1 = document.getElementsByClassName('avis')[1];
A1P2 = document.getElementsByClassName('avisp2')[0];
A2P2 = document.getElementsByClassName('avisp2')[1];
// L1 = document.getElementsByClassName('line1')[0];
// L2 = document.getElementsByClassName('line2')[0];
// L3 = document.getElementsByClassName('line3')[0];
// L4 = document.getElementsByClassName('line4')[0];
// FIP = document.getElementsByClassName('Switch')[0];
// SIP = document.getElementsByClassName('Switch')[1];
C1 = document.getElementsByClassName('categories')[0]
C2 = document.getElementsByClassName('categories')[1]
C3 = document.getElementsByClassName('categories')[2]
C4 = document.getElementsByClassName('categories')[3]
DL = document.getElementById('download')

// FIP.addEventListener('click', () => {
//     if (A1P2.style.visibility == 'visible' && A1P1.style.visibility == 'hidden') {
//         A1P2.style.visibility = 'hidden';
//         A1P1.style.visibility = 'visible';
//     } else {
//         A1P2.style.visibility = 'visible';
//         A1P1.style.visibility = 'hidden';
//     }
//     if (A2P2.style.visibility == 'visible' && A2P1.style.visibility == 'hidden') {
//         A2P2.style.visibility = 'hidden';
//         A2P1.style.visibility = 'visible';
//     } else {
//         A2P2.style.visibility = 'visible';
//         A2P1.style.visibility = 'hidden';
//     }
// });

// SIP.addEventListener('click', () => {
//     if (L1.style.visibility == 'visible') {
//         L1.style.visibility = 'hidden';
//         L2.style.visibility = 'visible';
//     } else if (L2.style.visibility == 'visible') {
//         L2.style.visibility = 'hidden';
//         L3.style.visibility = 'visible';
//     } else if (L3.style.visibility == 'visible') {
//         L3.style.visibility = 'hidden';
//         L4.style.visibility = 'visible';
//     } else {
//         L4.style.visibility = 'hidden';
//         L1.style.visibility = 'visible';
//     }

// });

C1.addEventListener('mouseover', () => {
    C1.style.width = '90px';
})
C1.addEventListener('mouseout', () => {
    C1.style.width = '30px';
})
C2.addEventListener('mouseover', () => {
    C2.style.width = '90px';
})
C2.addEventListener('mouseout', () => {
    C2.style.width = '30px';
})
C3.addEventListener('mouseover', () => {
    C3.style.width = '90px';
})
C3.addEventListener('mouseout', () => {
    C3.style.width = '30px';
})
C4.addEventListener('mouseover', () => {
    C4.style.width = '90px';
})
C4.addEventListener('mouseout', () => {
    C4.style.width = '30px';
})



SWITCH = document.getElementsByClassName('switch');


for (let i = 0; i < SWITCH.length; i++) {
    SWITCH[i].addEventListener('click', (event) => {

        let target = event.target.getAttribute('data-target');
        let slider = document.getElementById(target);

        let active = slider.getElementsByClassName('active')[0];

        active.classList.toggle('active');

        if (active.nextElementSibling == null) {
            slider.getElementsByClassName('line')[0].classList.toggle('active');
        } else {
            active.nextElementSibling.classList.toggle('active');
        }


    });
}