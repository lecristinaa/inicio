export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <TextInput style={styles.input}>
      Username
    </TextInput>
    <TextInput style={styles.input}>
     Password
    </TextInput>
   <Button mode="contained" style={styles.botao}>
      Login
   </Button>
   <Text style-{styles.texto}>
     Forgot your login details? Get help signing in.
  </Text>
  </SafeAreaView>
  );
}
