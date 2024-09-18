
<div>
    <h2>Your Order Has Been Shipped! Order #{{ $order->order_number }}</h2>

    <p>Dear {{ $order->user->name }},</p>

    <p>We're excited to inform you that your order has been shipped!</p>
    <p>Give the following code to the delivery man verify that you have received your order <span class="font-bold">{{ $code }}</span></p>

    <h3>Shipping Details:</h3>
    <ul>
        <li><strong>Order Number:</strong> {{ $order->order_number }}</li>
        <li><strong>Shipping Date:</strong> {{ $order->updated_at }}</li>
        {{-- <li><strong>Estimated Delivery Date:</strong> {{ $order->estimated_delivery_date }}</li>
        <li><strong>Shipping Carrier:</strong> {{ $order->carrier_name }}</li> --}}
    </ul>

    <h3>Items Shipped:</h3>
    <ul>
        @foreach($order->OrderItems as $item)
            <li>{{ $item->Product->name }} {{--  – Quantity: {{ $item->Product->quantity }} --}} </li>
        @endforeach
    </ul>

    <p>You can track the status of your shipment using the tracking number above. If you have any questions, feel free to contact us.</p>

    <p>Thank you for shopping with us!</p>

    <p>Best regards,</p>
    <p>{{ config('app.name') }}</p>
    <p>{{ config('app.contact_email') }}</p>
</div>
