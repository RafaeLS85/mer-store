import { useChartStore } from "@/store/chart"
import { parseCurrency } from "../../utils";
import { CHECKOUT_PAGE } from "@/constants/checkout";
import { IoLogoWhatsapp } from "react-icons/io";
import { PHONE_NUMBER } from "@/constants/config";
import { Button } from "@chakra-ui/react";

export const CheckoutButton = ({total} : {total: number} ) => {

    const chart = useChartStore((state) => state.chart );

    const text = chart
    .reduce(
      (message, product) =>
        message.concat(
          `* ${product.title} -  ${parseCurrency(product.price)}\n`
        ),
      ``
    )
    .concat(`\nTotal: ${parseCurrency(total)}`);

    return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{
          pointerEvents: !Boolean(chart.length) ? "none" : "unset",
          }}
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
          text
          )}`}
        >           
          <Button leftIcon={ <IoLogoWhatsapp size={25} />} colorScheme='whatsapp' variant='solid' isDisabled={!Boolean(chart.length)} >
              {CHECKOUT_PAGE.buttonLabel}
          </Button>
        </a>
    )
}