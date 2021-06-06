import Colors from "../constants/Colors";

export default {
  topContainer: {
    flex: 1.1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: "black",
    borderWidth: 2,
  },
  middleContainer: {
    flex: 5,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 15,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 15,
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
    borderColor: "black",
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
    borderColor: "black",
  },
  buttonText: {
    color: Colors.buttonTextColor,
    marginBottom: 10,
    fontSize: 35,
  },
  tabBar: {
    style: {
      height: 100,
      paddingBottom: 20
    },
    labelStyle: {
        fontSize: 20,
        textAlignVertical: 'center',
        textAlign: 'center'
    }
  }
};
