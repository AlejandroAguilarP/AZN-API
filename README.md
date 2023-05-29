## Instructions

Follow the steps below to build and run the Docker container:

1. Make sure you have Docker installed on your machine.

2. Clone this repository to your local machine.

3. Open a terminal or command line and navigate to the root directory of the project.

4. Run the following command to build the Docker image:

docker build -t server .

This will build the Docker image using the provided Dockerfile.

5. Once the Docker image is successfully built, run the following command to start a container based on that image:

docker run -p 4000:4000 server

This will map port 4000 of the container to port 4000 on your local machine.

6. You can now access your Apollo Server in your web browser using the following URL:

http://localhost:4000

This will take you to the GraphQL Playground interface where you can interact with your Apollo Server.

7. That's it! You can now start using and testing your Apollo Server in the Docker container.

## Notes

- If you want to use a different port for your Apollo Server inside the container, make sure to adjust the port mapping in the `docker run` command.

- If you want to customize your Apollo Server, make sure to make any necessary modifications to your source code before building the Docker image.

- To stop and remove the Docker container at any time, you can use the `docker stop` and `docker rm` commands.
