module.exports = [{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==aboutrebasebutton;]
    $onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
    $ephemeral
    ]]

    $interactionReply[$title[About Rebase]
    $description[Rebase is a special version of Dodo-Bot acting as a backup. It was originally made as Dodo-Bot v3 before it was later repurposed to be used as backup.

    As the name implies, it mostly acts as a emergency build in case if aoi.js suddenly died one day. It's also used for learning new stuff.]
    $color[$getGlobalVar[embedcolor]]
    $ephemeral
    ]
 `
}]
