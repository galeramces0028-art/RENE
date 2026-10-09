
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const products = [
  { id: "1", name: "T-Shirt", price: 250 },
  { id: "2", name: "Shoes", price: 1200 },
  { id: "3", name: "Bag", price: 500 },
];

export default function App() {
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          { fontSize: isTablet ? 36 : 28 },
        ]}
      >
        My Products
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        key={isTablet ? "tablet" : "mobile"}
        numColumns={isTablet ? 2 : 1}
        contentContainerStyle={styles.list}
        columnWrapperStyle={
          isTablet ? styles.row : undefined
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={[
              styles.product,
              isTablet && styles.tabletProduct,
            ]}
          >
            <Text
              style={[
                styles.name,
                { fontSize: isTablet ? 24 : 20 },
              ]}
            >
              {item.name}
            </Text>

            <Text style={styles.price}>
              ₱{item.price.toLocaleString("en-PH")}
            </Text>

            <View style={styles.buttonContainer}>
              <Button
                title="Add to Cart"
                onPress={() =>
                  Alert.alert(
                    "Added to Cart",
                    `${item.name} added successfully!`
                  )
                }
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
  },

  list: {
    paddingBottom: 24,
  },

  row: {
    gap: 12,
    alignItems: "stretch",
  },

  product: {
    flex: 1,
    minWidth: 0,
    backgroundColor: "white",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    gap: 10,
    elevation: 2,
  },

  tabletProduct: {
    maxWidth: "50%",
  },

  name: {
    fontWeight: "bold",
    color: "#333",
    flexWrap: "wrap",
  },

  price: {
    fontSize: 16,
    color: "#555",
  },

  buttonContainer: {
    marginTop: 4,
  },
});