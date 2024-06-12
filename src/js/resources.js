import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Alchemist: new ImageSource('images/alchemistwolamp.png'),
    Letter: new ImageSource('images/letter.png'),
    LevelOneScreenOne: new ImageSource('images/levelone/sceneone.png')
}
const ResourceLoader = new Loader([
    Resources.Alchemist,
    Resources.Letter,
    Resources.LevelOneScreenOne
])

export { Resources, ResourceLoader }