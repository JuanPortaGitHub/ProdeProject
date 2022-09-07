import { enumType, intArg, nonNull, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { Owner } from "./Owner";
import { User } from "./User";

export const Vehicle = objectType({
  name: "Vehicle",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("vin");
    t.nonNull.int("modelyear");
    t.nonNull.string("make");
    t.nonNull.string("model");
    t.list.nonNull.field("owners", {
      type: Owner,
      resolve: async (parent, args, context) => {
        let ownerList = context.prisma.vehicleOwners.findMany({
          where: {
            vehicleId: {
              equals: parent.id,
            },
          },
          include: {
            owner: true,
          },
        });

        console.log("Owners: " + JSON.stringify(ownerList));
        return ownerList;
      },
    });
  },
});

export const VehicleQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getVehicles", {
      type: "Vehicle",
      resolve(parent, args, context, info) {
        return context.prisma.vehicle.findMany({});
      },
    });
    t.field("getVehicleByVin", {
      type: "Vehicle",
      args: {
        vin: nonNull(stringArg()),
      },
      resolve(parent, args, context, info) {
        var vehicle = context.prisma.vehicle.findFirst({
          where: {
            vin: args.vin,
          },
        });

        return vehicle;
      },
    });
  },
});
