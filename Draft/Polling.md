# Polling

## Overview

Different polling methods have been developed since the first day of web.

See [Ajax Polling vs Long-Polling vs WebSockets vs Server-Sent Events](https://medium.com/geekculture/ajax-polling-vs-long-polling-vs-websockets-vs-server-sent-events-e0d65033c9ba).

## Driving Forces

- Performance:
  - Wasting less resources
  - Better responsiveness

## Methods

### Basic Polling (used by Ajax Polling)

- Client initiates a request.
- Server processes the request.
- Server sends back the response.
- The connection is closed.

### HTTP Long Polling

- Client initiates a request.
- Client and server keeps the connection alive because a proper response may not be ready yet.
- When a response becomes available, server sends it back.
  - Or, when the timeout of the connection is reached, the connection returns, too.
- The connection is closed.

### WebSockets

WebSocket provides full duplex communication between the client and the server.

Once client and server establishes a WebSocket communication channel, they can exchange information bi-directionally.

### Server-Sent Events (SSEs)

- Client initiates a connection to server.
- Using the connection, server can keep sending data back to client; **but client cannot seem to send data to server**.
  - Therefore, this is best for client receiving data from server and not vice versa.