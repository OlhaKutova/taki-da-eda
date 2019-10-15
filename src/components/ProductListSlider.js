import React, { Component } from 'react';
import { Dimensions, FlatList, Text, Image, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

const slideData = [
	'http://www.piccolaitalia.kiev.ua/fotky39143/fotos/_vyr_321italjanskij-ovecij-sir-moliterno-al-tartufo-717-10.jpeg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoUZprlqNNVnWu5i6W0Rdsp9OsgnD1RaPCL-q1i1mpddxTsRa',
	'https://chesom.com/image/cache/data/products/baskets/russian-cheeses-small/russian-cheeses-small-square-1-800x800.jpg',
	'https://posteat.ua/wp-content/uploads/2017/10/%D0%9A%D1%80%D0%BE%D1%82%D0%B5%D0%BD-%D0%B2-%D0%B7%D0%BE%D0%BB%D0%B5-1024x782.jpg',
	'https://www.nastroy.net/pic/images/201909/731788-1568649619.jpg',
	'https://propozitsiya.com/sites/default/files/styles/580x/public/news/syr_4.jpg?itok=vlI8f_vr',
	'http://www.piccolaitalia.kiev.ua/fotky39143/fotos/_vyr_321italjanskij-ovecij-sir-moliterno-al-tartufo-717-10.jpeg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoUZprlqNNVnWu5i6W0Rdsp9OsgnD1RaPCL-q1i1mpddxTsRa',
	'https://chesom.com/image/cache/data/products/baskets/russian-cheeses-small/russian-cheeses-small-square-1-800x800.jpg'
];

class ProductListSlider extends Component {

	renderSliderWrapper = () => {
		return (
			<View style={styles.sliderContainer}>
				<View style={styles.horizSliderHeader}>
					<Text style={{ fontSize: 22, color: 'darkred' }}>Новые товары</Text>
				</View>
				<View>
					<FlatList
						horizontal
						pagingEnabled
						scrollEnabled
						showsHorizontalScrollIndicator={false}
						scrollEventThrottle={16}
						snapToAlignment="center"
						data={slideData}
						keyExtractor={(item) => `${item}`}
						renderItem={({ item, index }) => this.renderProductItem(item, index)}
					/>
				</View>
			</View>
		);
	}

	renderProductItem = (item) => {
		return (
			<View style={styles.itemContainer}>
				<View>
					<Image style={styles.itemImage} source={{ uri: item }} />
					<View>
						<Text style={styles.productName}>
							Пармезан
						</Text>
						<Text style={styles.productPrice}>
							120 грн.
						</Text>
					</View>
				</View>
			</View>
		)
	}


	render() {
		return this.renderSliderWrapper()
	}

}

const styles = StyleSheet.create({
	sliderContainer: {
		width: width * 0.9
	},
	itemContainer: {
		marginRight: 20,
		marginBottom: 30,
		borderWidth: 1,
		borderColor: 'rgba(142, 142, 147, 0.2)'
	},

	horizSliderHeader: {
		marginBottom: 20
	},
	itemImage: {
		width: 120,
		height: 150,
		marginBottom: 10
	},
	productName: {
		fontSize: 12,
		marginLeft: 7,
		marginBottom: 3,
		color: 'darkred'
	},
	productPrice: {
		fontSize: 10,
		marginLeft: 7,
		marginBottom: 10,
		color: 'darkgreen'
	}
});

export default ProductListSlider;
