let card = document.getElementById('card');

let imageArray = ["https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagR3B3H9_n259Dqsz8eJCAWmtuVkPaCXpELTSgpbPf1rYOsdCyUBPFt0mTD94gyJjpnU&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTwcfRNFh1FeaGU01VOIFseiZWZEvhtu5ZMrtzCixV9L6QYxxoNdichJFuHgKEWlgKcE&usqp=CAU"];

let nameArray = ['Ahmed','Nick','Levi',];

let gmailArray = ['Ahmed@gmail.com','Nick@gmail.com','Levi@gmail.com',];

let statusArray = ['Manager','Frontend Dev','Backend Dev'];

let addressArray = ['House No-17, Latifabad unit#7','House No-20 Qasamabad','House No-120 Jamshoro'];

for (let i = 0;i < nameArray.length;i++){

    let container = document.createElement('div');

    container.setAttribute('class','container');

    let imgTag = document.createElement('img');
    imgTag.src = imageArray[i];
    imgTag.setAttribute('class','img');

    container.appendChild(imgTag);
    card.appendChild(container);

    let nameTag = document.createElement('div');
    nameTag.innerText = 'Name : '+nameArray[i];
    nameTag.setAttribute('class','name');

    container.appendChild(nameTag);
    card.appendChild(container);

    let statusTag = document.createElement('div');
    statusTag.innerText = 'Status : '+statusArray[i];
    statusTag.setAttribute('class','status');

    container.appendChild(statusTag);
    card.appendChild(container);

    let gmailTag = document.createElement('div');
    gmailTag.innerText = 'Gmail : '+gmailArray[i];
    gmailTag.setAttribute('class','gmail');

    container.appendChild(gmailTag);
    card.appendChild(container);

    let addressTag = document.createElement('div');
    addressTag.innerText = 'Address : '+gmailArray[i];
    addressTag.setAttribute('class','address');

    container.appendChild(addressTag);
    card.appendChild(container);
}