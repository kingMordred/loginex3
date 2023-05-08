import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({  
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
});
