import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Role } from "./entity/Role";

AppDataSource.initialize()
  .then(async () => {
    // create a new user
    // const user = new User();
    // set the user properties
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // user.bio = "Hello this is my Biography";
    // user.isAdmin = false;
    // use repository instead of Entity manager
    // const userRepository = AppDataSource.getRepository(User);
    // save the user
    // await AppDataSource.manager.save(user);
    // await userRepository.save(user); // Uncomment to Save
    // console.log("Saved a new user with id: " + user.id);
    // get all users
    // const users = await AppDataSource.manager.find(User);
    // use repository instead of Entity manager
    // const users = await userRepository.find();
    // console.log("Loaded users: ", users);
    // get user with id 2
    // const secondUser = await userRepository.findOneBy({
    //   id: 2,
    // });
    // console.log("User with id 2: ", secondUser);
    // get user with firstName Baz
    // const userWithName = await userRepository.findOneBy({
    //   firstName: "Baz",
    // });
    // console.log("User with firstName Baz: ", userWithName);
    // get users with isAdmin true
    // const usersWithAdmin = await userRepository.findBy({ isAdmin: true });
    // console.log("Users with isAdmin true: ", usersWithAdmin);
    // get count of users with isAdmin true
    // const [_, usersWithAdminCount] = await userRepository.findAndCount({
    //   where: {
    //     isAdmin: true,
    //   },
    // });
    // console.log("Count of Users with isAdmin true", usersWithAdminCount);
    // update a user
    // const userToUpdate = await userRepository.findOneBy({
    //   firstName: "Faz",
    // });
    // userToUpdate.firstName = "Farzaneh";
    // const updatedUser = await userRepository.save(userToUpdate);
    // console.log("updatedUser:", updatedUser);
    // remove a user
    // const userToRemove = await userRepository.findOneBy({ firstName: "Bob" });
    // const removedUser = await userRepository.remove(userToRemove);
    // console.log("removedUser:", removedUser);

    const user = new User();
    user.firstName = "Mister";
    user.lastName = "Relation";
    user.age = 99;
    user.bio = "bla bla bla";
    user.isAdmin = false;

    const role = new Role();
    role.role = "volunteer";

    const roleRepository = AppDataSource.getRepository(Role);
    const userRepository = AppDataSource.getRepository(User);

    const newRole = await roleRepository.save(role);
    await userRepository.save(user);

    console.log(`Relationship between ${user} and ${role}`);
  })
  .catch((error) => console.log(error));
