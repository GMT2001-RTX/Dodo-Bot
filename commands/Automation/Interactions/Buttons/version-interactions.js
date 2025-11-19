module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionchanges;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Changes]
$description[
* Bumped ForgeScript to version \`2.5.0\`
* Allow resetting levels for specific users in \`leveling\` command
* Use the normal canary-related links in \`canary\` command (preparation to rename Rebase to v3)
* Added 3 new commands called \`pet\`, \`periodic-table\` and \`aur\`
* Rewrote \`guess-the-pokemon\` (internally) and added a loading message
* Display leaderboard position of the user in \`rank\` command (only appears for level 2 and higher)
* Temporarily disable \`guess-the-pokemon\` command (as it stopped working)
* Added alias \`h\` for \`help\`
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./assets/warning.png;warning.png]
$footer[Testing is recommended;attachment://warning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionhomebutton_$authorID;Home;Secondary;🏠]
$addButton[versionchanges_$authorID;Changes;Secondary;;true]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
$addButton[versionother_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot/releases;Changelog history;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionbugfixes;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Bug Fixes]
$description[
* Fixed a bug where simply sending the bot's prefix (without command name) would execute \`report\` command
* (Source code) Make dotenvx look for \`.env\` or \`.env.local\` to avoid potential problems
* Fixed a bug where \`2048\` was using the same name as \`minesweeper\` (i feel dumb asf)
* Made \`wyr\` command work again
  * The error message when the command fails is also now less confusing
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./assets/warning.png;warning.png]
$footer[Testing is recommended;attachment://warning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionhomebutton_$authorID;Home;Secondary;🏠]
$addButton[versionchanges_$authorID;Changes;Secondary]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary;;true]
$addButton[versionother_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot/releases;Changelog history;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionother;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Other]
$description[
* (Devs only) Bot staff who're in \`ReadOnly\` role can no longer access special commands
  * This is done so to improve the security of the bot
  * The setup option \`AllowBotMembers\` is now called \`AllowBotManagers\` as part of this change
* (Devs only) \`jseval\` command will now always output the code result no matter what
* (Source code) Bumped \`@dotenvx/dotenvx\` to version \`1.51.1\`
* (Source code) Bumped \`@tryforge/forge.db\` to version \`2.1.1\`
* Node.js 18 and later is now required to setup Dodo-Bot (for Rebase)
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./assets/warning.png;warning.png]
$footer[Testing is recommended;attachment://warning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionhomebutton_$authorID;Home;Secondary;🏠]
$addButton[versionchanges_$authorID;Changes;Secondary]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
$addButton[versionother_$authorID;Other;Secondary;;true]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot/releases;Changelog history;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionhomebutton;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[releasedatetype;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;Last updated on;false;Released on]]

$interactionUpdate[
$title[Dodo-Bot version]
    $description[
* **Version**: $getGlobalVar[version]$if[$getGlobalVar[buildRevision]!=0; (Revision $getGlobalVar[buildRevision])]
* **Release type**: $getGlobalVar[release_type]
* **$get[releasedatetype]**: <t:$trunc[$divide[$getGlobalVar[buildDate];1000]]:f>
    ]
$if[$getGlobalVar[pre_release]==on;
$attachment[./assets/warning.png;warning.png]
$footer[Testing is recommended;attachment://warning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionchanges_$authorID;Changes;Secondary]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
$addButton[versionother_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot/releases;Changelog history;Link;📜]
]`
}]
