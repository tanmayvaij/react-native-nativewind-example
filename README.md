# React Native Tailwind v4 Template

This repository provides a template for using **Tailwind CSS** (via NativeWind v4) in React Native applications. NativeWind allows you to apply Tailwind's utility-first approach to style your mobile app efficiently, enabling rapid development with responsive, consistent styling.

## Features

- **Tailwind CSS for React Native**: Use familiar Tailwind utility classes to style your app components.
- **Responsive Design**: Create layouts that adapt seamlessly to different screen sizes.
- **Easy Integration**: Preconfigured for NativeWind v4, offering quick setup for both iOS and Android.

## Setup Instructions

### Steps

1. **Clone the Repository**  
   Clone this template to your local machine:
   ```bash
   git clone https://github.com/tanmayvaij/react-native-tailwind-v4-template.git
   ```

2. **Install Dependencies**  
   Navigate to the project directory and install required dependencies:
   ```bash
   cd react-native-tailwind-v4-template
   yarn
   ```

3. **Run the Application**  
   To launch the app on an emulator or connected device, run:
   ```bash
   yarn start
   ```

## Usage

To customize styles, modify the components in the `src` folder using Tailwind utility classes. Example:

```js
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View className="flex items-center justify-center border h-full bg-gray-900">
      <Text className="text-3xl text-yellow-500 font-bold text-center">
        React Native NativeWind Example
      </Text>
    </View>
  );
}
```

## Documentation

For more details, refer to the [NativeWind documentation](https://www.nativewind.dev/docs).
