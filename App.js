import { StatusBar, Text, View } from "react-native";
import MyBlur from "./MyBlur";

export default function App() {
  // blur example
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MyBlur />
      <Text style={{fontSize: 32, fontWeight: 'bold'}}>Hello World</Text>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
}

// example with  image and blur

// import { View, useWindowDimensions } from "react-native";
// import { Canvas, Fill, Text, useFont, Image, BackdropBlur, ColorMatrix, useImage, rect, rrect, Box, BoxShadow } from "@shopify/react-native-skia";
 
// const App = () => {
//   const { width, height } = useWindowDimensions();
//   const image = useImage(require("./assets/cat3.jpg"));
//   const font = useFont(require("./assets/Raleway.ttf"), 32);

//   if (font === null) {
//     return null;
//   }
//   if (!image) {
//     return null;
//   }
//   return (
//   <Canvas style={{ flex: 1}}>
//     <Fill color="#ECF3FF" />
//       <Image
//         image={image}
//         x={0}
//         y={0}
//         width={width}
//         height={height}
//         fit="cover"
//       />

//       <BackdropBlur
//         blur={20}
//         // invertClip={true}
//        clip={"M100,100 h250 a20,20 0 0 1 20,20 v500 a20,20 0 0 1 -20,20 h-300 a20,20 0 0 1 -20,-20 v-500 a20,20 0 0 1 20,-20 z"} 
//         // clip={{ x: width * .1, y: height * .1, width: width * .8, height: height * .8, rx: 200, rect: true }}
//       >
//         <Fill color="#ffffff20" />
//         <Image
//           image={image}
//           x={100}
//           y={100}
//           width={width / 2}
//           height={height / 2}
//           fit="cover"
//         />
//       </BackdropBlur>

//   </Canvas>
//   );
// };

// export default App;


// neumorphism example

// const { width, height } = useWindowDimensions();
// const image = useImage(require("./assets/cat2.jpg"));
// const font = useFont(require("./assets/Raleway.ttf"), 32);

// if (font === null) {
//   return null;
// }
// if (!image) {
//   return null;
// }
// return (
// <Canvas style={{ width: width, height: height }}>
//   <Fill color="#ECF3FF" />
//   <Text
//       x={60}
//       y={250}
//       text="Hello World"
//       font={font}
//       size={32}
//       color="#00000050"
//     />
//   <Box box={rrect(rect(64, 64, 128, 128), 24, 24)} color="#ECF3FF">
//     <BoxShadow dx={-10} dy={-10} blur={10} color="#fff" />
//     <BoxShadow dx={10} dy={10} blur={10} color="rgba(174, 174, 192, 0.6)"/>
//   </Box>

//   <Box box={rrect(rect(200, 280, 128, 128), 100, 100)} color="#ECF3FF">
//     <BoxShadow dx={10} dy={10} blur={10} color="rgba(174, 174, 192, 0.6)" inner />
//     <BoxShadow dx={-10} dy={-10} blur={10} color="#fff" inner />
//     <BoxShadow dx={10} dy={10} blur={10} color="rgba(174, 174, 192, 0.6)" />
//     <BoxShadow dx={-10} dy={-10} blur={10} color="#fff" />
//   </Box>
//   <Box box={rrect(rect(40, 500, width * .8, 128), 24, 24)} color="#ECF3FF">
//     <BoxShadow dx={-10} dy={-10} blur={10} color="#fff" />
//     <BoxShadow dx={10} dy={10} blur={10} color="rgba(174, 174, 192, 0.6)"/>
//   </Box>
//   <Box box={rrect(rect(100, 540, 200, 50), 10, 10)} color="#ECF3FF">
//     <BoxShadow dx={10} dy={10} blur={10} color="rgba(174, 174, 192, 0.6)" inner />
//     <BoxShadow dx={-10} dy={-10} blur={10} color="#fff" inner />
//   </Box>
// </Canvas>
// );