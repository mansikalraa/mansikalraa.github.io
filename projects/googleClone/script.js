const searchInput = document.querySelector("#search-input");
const searchbtn = document.getElementById("google-search-btn");

searchInput.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        search();
    }
});

searchbtn.addEventListener("click", search);

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.co.in/search?q=" + input + "&source=hp&ei=dWraYbjdDMibseMP_7u8mAg&iflsig=ALs-wAMAAAAAYdp4hTDfFe-dYsllvtYAldwBruXwuEWd&ved=0ahUKEwj466uX8KP1AhXITWwGHf8dD4MQ4dUDCAc&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCAguEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIICAAQgAQQsQMyBQguEIAEMgUIABCABDIICAAQgAQQsQMyBQguEIAEOg4IABCPARDqAhCMAxDlAjoOCC4QjwEQ6gIQjAMQ5QI6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToICAAQsQMQgwE6DgguEIAEELEDEMcBEKMCOggILhCxAxCDAToLCAAQgAQQsQMQyQM6BQgAEJIDUMcDWM8KYLQNaAFwAHgAgAGkAYgBsQWSAQMwLjWYAQCgAQGwAQo&sclient=gws-wiz"
}