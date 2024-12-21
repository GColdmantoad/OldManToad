const serviceList = [
    {
        id: 0,
        name: 'Haircut',
        desc: `This service is for any sheer (scissor) work or fade you'd like. Line up and simple dry or wet styling is includeded!
            This service DOES Not include a shampoo, any hot styling tools, trimmiing or lining of facial hair.`,
        time: 90,
        price: 75,
        includes: 'Simple dry or wet styling'
    },
    {
        id: 1,
        name: 'Insta Locks',
        desc: `This service is for insta locks using a crochet hok. Any fade or sheer work if needed is icluded if you like. I will teach you how to maintain your locks & recomned products 
                to use. Shampoo IS included! This service DOES NOT include any trimming or lining of facial hair.`,
        time: 240,
        price: 250,
        includes: 'Shampoo & Maintenance tips'
    },
    {
        id: 2,
        name: 'Custom Color Services',
        desc: `This includes creating a custtom service for you to achive your desired results. (Balayage, Fashion Colors, Grey Coverage, ect..) Shampoo IS included.`,
        time: 240,
        price: 200,
        includes: 'Shampoo'
    },
    {
        id: 3,
        name: 'Color Corrections',
        desc: `This includes creating a custom correction service for you to achive your desired results. 
        (Evening out tones, back to natural, or embracing the grey) Includes Maintenance advice, Shampoo IS included`,
        time: 240,
        price: 300,
        includes: 'Shampoo & Maintenance tips'
    },
]
const addOns = [
    {
        id: 0,
        name: 'Shampoo/Conditioner',
        desc: `Freshen up and repair your hair with a shampoo and conditioning service. Simple wet or dry style included. Can be 
        done before or after other services`,
        time: 10,
        price: 20,
    },
    {
        id: 1,
        name: 'Just Beard/Goatee',
        desc: `If you need beard/goatee done this service is for you! Scuplting, lining to achive that look you're going for!`,
        time: 60,
        price: 25,
    },
    {
        id: 2,
        name: 'Just Styling',
        desc: `If you want to add a style, blow out or need help choosing the right products this is for you! 
        I will teach you how to style your hair & what products to use.`,
        time: 60,
        price: 25,
    },
    {
        id: 3,
        name: 'OLOPLEX',
        desc: `Adding oloplex to your color service helps to preserve hair integrity and repair damage.
        (Highly suggested for lighener/bleach treatments, especially platinums)
        $15 per batch.`,
        time: 0,
        price: 15,
    },
]
document.addEventListener('DOMContentLoaded', function () {
    loadServices()

})
function startBooking(id) {
    let data = serviceList[id]
    $("#optContainer").hide()
    $("#aptContainer").show()

    document.querySelector("#aptContainer").innerHTML =`

        <div class="opt">
            <div style="justify-content:space-between" class="row">
                <div>
                    <h3 style="margin: 0;">${data.name}</h3>
                    <div style="margin-bottom: 1em;">${convertMinutesToHoursMinutes(data.time)} @ $${data.price}${data.time == 240 ? '+' : '' }
                    ${data.time == 240 ? '<br />(+$50 per hours after 4 hours)' : '' }</div>
                </div>
                <button onclick="cancelAppt()" class="btn">Cancel</button>
            </div>

        <h5 style="margin: 0;">Includes</h5>
        <div style="margin-bottom: 1em;">
            ${data.includes}
        </div>
        <h5 id="addOnHeader" style="display: none; margin: 0;">Additional Add Ons</h5>
            
        <div id="addOnContainer"></div>
            <div class="row"><span style="display: none" class='more-text'>${data.desc}</span></div>
            <button class="textBtn" id="toggle-button" onclick="toggleDes()">Show Description</button>
        </div >

        `
        loadAddOns()
}
function  cancelAppt() {
    $("#optContainer").show()
    $("#aptContainer").hide()
    document.querySelector("#aptContainer").innerHTML = ''
}
function convertMinutesToHoursMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let result = '';
    if (hours > 0) {
        result += hours + ' Hour';
        if (hours > 1) {
            result += 's';
        }
    }

    if (hours > 0 && remainingMinutes > 0) {
        result += ' & ';
    }

    if (remainingMinutes > 0) {
        result += remainingMinutes + ' Minute';
        if (remainingMinutes > 1) {
            result += 's';
        }
    }

    return result;
}
function loadServices() {

    for (let i = 0; serviceList.length > i; i++) {
        let data = serviceList[i]
        document.querySelector("#optContainer").innerHTML += `
            <div class="opt">
            <div style="justify-content:space-between" class="row">
                <div>
                    <h3 style="margin: 0;">${data.name}</h3>
                    <div style="margin-bottom: 1em;">${convertMinutesToHoursMinutes(data.time)} @ $${data.price}${data.time == 240 ? '+' : ''}
                    ${data.time == 240 ? '<br />(+$50 per hours after 4 hours)' : ''}</div>
                </div>
                <button onclick="startBooking(${data.id})" class="btn">Book Now</button>
            </div>
            <div class="row">${data.desc}</div>
        </div >
        `
    }
}
function loadAddOns() {
    for (let i = 0; addOns.length > i; i++) {
        let data = addOns[i]
        document.querySelector("#aptContainer").innerHTML += `
            <div class="opt">
            <div style="justify-content:space-between" class="row">
                <div>
                    <h3 style="margin: 0;">${data.name}</h3>
                    <div style="margin-bottom: 1em;">${convertMinutesToHoursMinutes(data.time)} @ $${data.price}</div>
                </div>
                <button style='min-width: 38px;' onclick="addOnService(${data.id})" class="btn">+</button>
            </div>
            <div class="row">${data.desc}</div>
        </div >
        `
    }
}
function addOnService(id) {

    $("#addOnHeader").show();
    let data = addOns[id]
    document.querySelector("#addOnContainer").innerHTML += `
            ${data.name} +${convertMinutesToHoursMinutes(data.time)} @ $${data.price}
       <br>
        `
}
function toggleDes() {
    var moreText = $(".more-text");
    var button = $("#toggle-button");

    if (moreText.is(":visible")) {
        moreText.hide();
        button.text("Show More");
    } else {
        moreText.show();
        button.text("Show Less");
    }
}