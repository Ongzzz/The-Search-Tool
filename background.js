browser.contextMenus.create({	//create a parent option
    id: "parent",
	contexts: ["selection"],
	title: "Search this on ..."  //the title of the parent option
}, onCreated);

browser.contextMenus.create({	//create a Google child option in the parent option
    id: "Google",
    parentId: "parent",
    title: "Google",			//the title of the Google child option
    contexts: ["selection"],
	icons:  					//icons of the Google child option
	{
    "16": "icons/google-16.png",
	"32": "icons/google-32.png"
	}
}, onCreated);

browser.contextMenus.create({	//create a YouTube child option in the parent option
    id: "Youtube",
    parentId: "parent",
    title: "Youtube",			//the title of the YouTube child option
    contexts: ["selection"],
	icons: 						//icons of the YouTube child option
	{
    "16": "icons/youtube-16.png",
	"32": "icons/youtube-32.png"
	}
}, onCreated);

browser.contextMenus.create({	//create a Facebook child option in the parent option
    id: "Facebook",
    parentId: "parent",
    title: "Facebook",			//the title of the Facebook child option
    contexts: ["selection"],
	icons: 						//icons of the Facebook child option
	{
    "16": "icons/facebook-16.png",
	"32": "icons/facebook-32.png"
	}
}, onCreated);

function onCreated(n) 			//check if the menu item is created successfully
{
    if (browser.runtime.lastError) 
	{
        console.log(`Error: ${browser.runtime.lastError}`);
    } 
	else 
	{
        console.log("Menu Item created successfully");
    }
}


browser.contextMenus.onClicked.addListener(function(info, tab) {	//check which child option is selected
	switch (info.menuItemId) 	//get id of the selected child option
	{
		case "Google":
			var highlighted = info.selectionText;	//get the selected text 
				if(highlighted)	//check if there is selected text 
				{
					var redirectLink = 'https://www.google.com/search?q=' + encodeURIComponent(highlighted);		//concatenate the selected text to the Google url
					browser.tabs.create({url: redirectLink});	//create a new tab and redirect to Google to search the selected text
				}
		break;
		
		case "Youtube":		
			var highlighted = info.selectionText;	//get the selected text 
			if(highlighted)	//check if there is selected text 
			{
				var redirectLink = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(highlighted);	//concatenate the selected text to the YouTube url 
				browser.tabs.create({url: redirectLink});	//create a new tab and redirect to YouTube to search the selected text
			}
		break;
		
		case "Facebook":
			var highlighted = info.selectionText;	//get the selected text 
				if(highlighted)	//check if there is selected text 
				{
					var redirectLink = 'https://www.facebook.com/search/top?q=' + encodeURIComponent(highlighted);		//concatenate the selected text to the Facebook url
					browser.tabs.create({url: redirectLink});	//create a new tab and redirect to Facebook to search the selected text
				}
		break;
	}
})



