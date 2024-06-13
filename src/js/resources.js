import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    // art
    Alchemist: new ImageSource('images/alchemistwolamp.png'),
    Letter: new ImageSource('images/letter.png'),
    LevelOneScreenOne: new ImageSource('images/levelone/sceneone.png'),
    // music
    LevelOneMusic: new Sound('music/CLE_4_level_1.mp3')

}
const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }