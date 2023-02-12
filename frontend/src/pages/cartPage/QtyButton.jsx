import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiMinusSm } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { decreaseCartQty, getAllCartData, increaseCartQty } from "../../redux/cart/cart.action";

import styles from "./QtyButton.module.css";

const QtyButton = ({
  quantity ,
  id,
  handleIncrement,
  handleDecrement,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.qty_box}>
        <Box
        as='button'
          disabled={quantity === 1}
          onClick={() =>
            dispatch(decreaseCartQty({id})).then((res) => {
              dispatch(getAllCartData());
            })
          }
          className={styles.qty_box_button}
        >
          <Text fontWeight="medium">
            <HiMinusSm />
          </Text>
        </Box>
        <p className={styles.qty_box_item}>{quantity}</p>
        <Box
        as='button'
        disabled={quantity === 10}
          onClick={() =>
            dispatch(increaseCartQty({id})).then((res) => {
              dispatch(getAllCartData());
            })
          }
          className={styles.qty_box_button}
        >
           <Text fontWeight="medium">
          <AiOutlinePlus />
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default QtyButton;
