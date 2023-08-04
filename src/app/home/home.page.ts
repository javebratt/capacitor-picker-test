import { Component } from '@angular/core';
import { Camera, CameraPluginPermissions, GalleryPhotos } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  pickPhoto = async () => {
    const permissions = await Camera.requestPermissions({
      permissions: ['photos']
    });

    const images: GalleryPhotos = await Camera.pickImages({
      quality: 100,
    });

    console.log(images)
  };

}
