// ==UserScript==
// @name            SeriousGmod Enhancement
// @author          Zikeji
// @match           https://www.seriousgmod.com/*
// @match           http://www.seriousgmod.com/*
// @require         jquery-2.1.4.min.js
// ==/UserScript==
'use strict';

var info = kango.getExtensionInfo();

if (window.location.protocol != "https:")
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);

var steamIDs = [];
$('a[href*="http://steamcommunity.com/profiles/"] img[src="styles/default/steam/steam_16.png"]').parent().each(function(i, ele) {
    var t_arr = ele.href.split('/');
    var sID = t_arr[t_arr.length - 1];
    if ($.inArray(sID, steamIDs) === -1) steamIDs.push(sID);
});
kango.xhr.send({
    method: 'GET',
    url: 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + info.SteamAPIKey + '&steamids=' + steamIDs.join(','),
    contentType: 'json'
}, function(data) {
    if (data.status == 200 && data.response != null) {
        if (typeof data.response.response.players != "undefined") {
            var players = data.response.response.players
            for (var i in players) {
                var player = players[i];
                $('a[href="http://steamcommunity.com/profiles/' + player.steamid + '"] img[src="styles/default/steam/steam_16.png"]').css('vertical-align', '-3px');
                $('a[href="http://steamcommunity.com/profiles/' + player.steamid + '"] img[src="styles/default/steam/steam_16.png"]').parent().append("&nbsp;(" + player.personaname + ")");
            }
        }
    }
});
