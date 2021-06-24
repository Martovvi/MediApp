import Colors from "../constants/Colors";

export default {
  topContainer: {
    flex: 1.1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: Colors.borderStyleColor,
    borderWidth: 2,
    backgroundColor: Colors.primary,
  },
  middleContainer: {
    flex: 5,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 15,
    borderColor: Colors.borderStyleColor,
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 15,
    backgroundColor: Colors.lightBackground,
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20,
  },
  returnButton: {
    height: 60,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.borderStyleColor,
    marginRight: 265,
  },
  textButton: {
    height: 60,
    width: 345,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.borderStyleColor,
  },
  pollenButton: {
    height: 60,
    width: 345,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.borderStyleColor,
    padding: 40,
  },
  buttonPollenText: {
    color: Colors.buttonTextColor,
    marginBottom: 10,
    fontSize: 29,
  },
  buttonText: {
    color: Colors.buttonTextColor,
    marginBottom: 10,
    fontSize: 35,
    fontFamily: Colors.buttonFont,
  },
  tabBar: {
    style: {
      height: 100,
      paddingBottom: 20,
    },
    labelStyle: {
      fontSize: 20,
      textAlignVertical: "center",
      textAlign: "center",
    },
  },
};
