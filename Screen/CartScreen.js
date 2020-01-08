import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/colors';
import CartItem from '../components/CartItem';
import Card from '../components/Card';
import * as cartActions from '../store/actions/cart';
import * as ordersActions from '../store/actions/orders';

const CartScreen = props => {
  const [isLoading, setIsLoading] = useState(false);

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        serviceId: key,
        servicecharge: state.cart.items[key].servicecharge,
        logistics: state.cart.items[key].logistics,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.serviceId > b.serviceId ? 1 : -1
    );
  });
  const dispatch = useDispatch();

  const sendOrderHandler = async () => {
    setIsLoading(true);
    await dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
    setIsLoading(false);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.primary} />
        ) : (
          <Button
            color={Colors.accent}
            title="Order Now"
            disabled={cartItems.length === 0}
            onPress={sendOrderHandler}
          />
        )}
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.serviceId}
        renderItem={itemData => (
          <CartItem
            servicecharge={itemData.item.servicecharge}
            logistics={itemData.item.logistics}
            sum={itemData.item.sum}
            deletable
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.serviceId));
            }}
          />
        )}
      />
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'Your Cart'
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  }
});

export default CartScreen;
