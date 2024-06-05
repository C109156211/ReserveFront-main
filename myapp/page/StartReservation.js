import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

function MyComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
        resizeMode="cover"
        source={require("C:/Users/USER/ReserveFront-main/myapp/assets/ic_round-menu.png")}
        style={styles.headerImage}
      />      
      </View>
      <View style={styles.form}>
        <View style={styles.title}>
          <Text style={styles.titleText}>填寫資訊</Text>
        </View>
        <View style={styles.formGroupInline}>
          <Text style={[styles.label, styles.inlineLabel]}>姓名</Text>
          <TextInput style={[styles.input, styles.smallInput]} />
        </View>
        <View style={styles.formGroupInline}>
          <Text style={[styles.label, styles.inlineLabel]}>電話</Text>
          <TextInput style={[styles.input, styles.smallInput]} />
        </View>
        <View style={styles.formGroupRow}>
          <Text style={[styles.label, styles.inlineLabel]}>預約時段</Text>
          <Text style={styles.value}>2024/05/20 14:30</Text>
        </View>
        <View style={[styles.formGroupInline, styles.extraMargin]}>
          <Text style={[styles.label, styles.topAlignedLabel]}>需求備註</Text>
          <TextInput style={styles.textArea} />
        </View>
        <View style={[styles.checkboxGroup, styles.extraMargin]}>
          <View style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>勾選代表同意服務條款</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelbuttonText}>取消</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmbuttonText}>確定</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF1F4",
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    width: screenWidth,
  },
  header: {
    backgroundColor: "#B5BECC",
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  headerImage: {
    width: 28,
    height: 28,
    marginRight: 330,
  },
  form: {
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 3,
    padding: 20,
    marginTop: 40,
  },
  title: {
    alignItems: "center",
    marginBottom: 30,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#353535",
  },
  formGroup: {
    marginBottom: 50,
  },
  formGroupRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  formGroupInline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    color: "#353535",
    marginBottom: 10,
    flex: 1,
  },
  inlineLabel: {
    marginRight: 3, // 將label右移3px
  },
  topAlignedLabel: {
    alignSelf: 'flex-start', // label靠上對齊
  },
  input: {
    backgroundColor: "#ECECEC",
    borderRadius: 3,
    paddingHorizontal: 10,
    flex: 3,
  },
  smallInput: {
    height: 35, // 調小TextInput的高度
  },
  textArea: {
    backgroundColor: "#ECECEC",
    borderRadius: 3,
    height: 100, // 調整TextArea高度
    paddingHorizontal: 10,
    textAlignVertical: "top",
    flex: 3,
  },
  value: {
    color: "#898989",
    paddingVertical: 10,
    flex: 2,
    textAlignVertical: 'center', // 垂直對齊
  },
  checkboxGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  extraMargin: {
    marginBottom: 80, // 需求備註的label和TextInput跟checkbox調遠一點
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderColor: "rgba(195, 203, 222, 1)",
    borderWidth: 1,
    backgroundColor: "#FFF",
    marginRight: 10,
    marginBottom: 0, // 調整與按鈕組的距離
  },
  checkboxLabel: {
    color: "#353535",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  cancelButton: {
    backgroundColor: "#EBEBEB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
  },
  confirmButton: {
    backgroundColor: "#B5BECC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
  },
  cancelbuttonText: {
    color: "#353535",
  },
  confirmbuttonText: {
    color: "#FFF",
  },
});

export default MyComponent;
