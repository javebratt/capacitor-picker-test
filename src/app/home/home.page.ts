import { Component } from '@angular/core';
import { Camera, CameraPluginPermissions, GalleryPhotos } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
images: string[] = [];
  constructor() {}

  pickPhoto = async () => {
    let images: GalleryPhotos;

    const permissions = await Camera.requestPermissions({
      permissions: ['photos']
    });

    if (permissions.photos === 'granted') {
      images = await Camera.pickImages({
        quality: 100,
      });
    } else {
      images = await Camera.pickLimitedLibraryPhotos();
    }

    console.log(images)
  };

}
