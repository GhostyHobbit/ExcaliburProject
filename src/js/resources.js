import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    // art
    Alchemist: new ImageSource('images/alchemistwolamp.png'),
    AlchemistLamp: new ImageSource('images/alchemistwlamp.png'),
    Letter: new ImageSource('images/letter.png'),
    LevelOneScreenOne: new ImageSource('images/levelone/sceneone.png'),
    Intro: new ImageSource('images/introscene.png'),
    // music
    MainThemeMusic: new Sound("music/CLE_4_Main_Theme.mp3"),
    LevelOneMusic: new Sound('music/CLE_4_Level_1.mp3'),
    LevelTwoMusic: new Sound('music/CLE_4_Level_2.mp3')
}
const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }