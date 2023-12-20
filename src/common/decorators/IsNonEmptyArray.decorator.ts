import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsNonEmptyArray(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsNonPrimitiveArray',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value) {
            return false;
          }
          if (value.length === 0) {
            return false;
          }
          return (
            Array.isArray(value) &&
            value.reduce(
              (a, b) => a && typeof b === 'object' && !Array.isArray(b),
              true,
            )
          );
        },
        defaultMessage(args) {
          if (args.value?.length === 0) {
            return 'The array length should be greater than 0';
          }
          return `${args.property} does not exist`;
        },
      },
    });
  };
}
