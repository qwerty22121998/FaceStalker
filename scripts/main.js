jQuery("._2t-a ._50tj").parent().append(

    "<font id='tickcounter' class='counter' align='right'><b>Loading...</b></font><font class='loadmore'>▼<span class='tooltiptext'>Click to load more items.</span></font></font><input class='spyname' type='text' name='spyname' id='spyname' placeholder='Who is your target?'></input>"
)

var numberOfItem = 0;

function isSub(str, substr) {
    str = str.toLowerCase();
    substr = substr.toLowerCase();
    return str.indexOf(substr) !== -1;
}


jQuery(document).on("click", ".loadmore", function(event) {
    jQuery(".fbFeedTickerStory.tickerStoryClickable").show();
    jQuery(".pam.tickerMorePager.stat_elem")[0].scrollIntoView();
    filter();
})



function filter() {

    var items = jQuery(".fbFeedTickerStory.tickerStoryClickable")
    var filterName = jQuery('#spyname').val();

    if (filterName != '') {
        numberOfItem = 0;
        for (var i = 0; i < items.length; i++) {
            var name = items[i].getElementsByClassName("fwb");
            var userName = name[0].innerHTML;
            if (!isSub(userName, filterName)) items[i].style.display = 'none';
            else {
                items[i].style.display = 'block';
                numberOfItem++;
            }

        }
        document.getElementById("tickcounter").innerHTML = "<b>Found : " + "<i>" + numberOfItem + "/" + items.length + "</i></b>"
    } else {
        items.show();
        numberOfItem = items.length;
        document.getElementById("tickcounter").innerHTML = "<b>Found : " + "<i>" + numberOfItem + "/" + items.length + "</i></b>"
    }

}

$(document).on('keyup scroll mousemove', function(event) {
    filter();
});