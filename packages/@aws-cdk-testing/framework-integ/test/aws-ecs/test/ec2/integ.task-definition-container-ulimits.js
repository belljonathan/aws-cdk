"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const ecs = require("aws-cdk-lib/aws-ecs");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-ecs-task-definition-container-ulimits');
const taskDefinition = new ecs.Ec2TaskDefinition(stack, 'TaskDef', {});
taskDefinition.addContainer('Container', {
    image: ecs.ContainerImage.fromRegistry('public.ecr.aws/ecs-sample-image/amazon-ecs-sample:latest'),
    memoryReservationMiB: 32,
    memoryLimitMiB: 512,
    ulimits: [{
            hardLimit: 128,
            name: ecs.UlimitName.RSS,
            softLimit: 128,
        }],
});
new integ_tests_alpha_1.IntegTest(app, 'TaskDefinitionContainerUlimits', {
    testCases: [stack],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcudGFzay1kZWZpbml0aW9uLWNvbnRhaW5lci11bGltaXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcudGFzay1kZWZpbml0aW9uLWNvbnRhaW5lci11bGltaXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUMzQyxrRUFBdUQ7QUFFdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO0FBRTlFLE1BQU0sY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFdkUsY0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7SUFDdkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLDBEQUEwRCxDQUFDO0lBQ2xHLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsY0FBYyxFQUFFLEdBQUc7SUFDbkIsT0FBTyxFQUFFLENBQUM7WUFDUixTQUFTLEVBQUUsR0FBRztZQUNkLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUc7WUFDeEIsU0FBUyxFQUFFLEdBQUc7U0FDZixDQUFDO0NBQ0gsQ0FBQyxDQUFDO0FBRUgsSUFBSSw2QkFBUyxDQUFDLEdBQUcsRUFBRSxnQ0FBZ0MsRUFBRTtJQUNuRCxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDbkIsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIGVjcyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZWNzJztcbmltcG9ydCB7IEludGVnVGVzdCB9IGZyb20gJ0Bhd3MtY2RrL2ludGVnLXRlc3RzLWFscGhhJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbmNvbnN0IHN0YWNrID0gbmV3IGNkay5TdGFjayhhcHAsICdhd3MtZWNzLXRhc2stZGVmaW5pdGlvbi1jb250YWluZXItdWxpbWl0cycpO1xuXG5jb25zdCB0YXNrRGVmaW5pdGlvbiA9IG5ldyBlY3MuRWMyVGFza0RlZmluaXRpb24oc3RhY2ssICdUYXNrRGVmJywge30pO1xuXG50YXNrRGVmaW5pdGlvbi5hZGRDb250YWluZXIoJ0NvbnRhaW5lcicsIHtcbiAgaW1hZ2U6IGVjcy5Db250YWluZXJJbWFnZS5mcm9tUmVnaXN0cnkoJ3B1YmxpYy5lY3IuYXdzL2Vjcy1zYW1wbGUtaW1hZ2UvYW1hem9uLWVjcy1zYW1wbGU6bGF0ZXN0JyksXG4gIG1lbW9yeVJlc2VydmF0aW9uTWlCOiAzMixcbiAgbWVtb3J5TGltaXRNaUI6IDUxMixcbiAgdWxpbWl0czogW3tcbiAgICBoYXJkTGltaXQ6IDEyOCxcbiAgICBuYW1lOiBlY3MuVWxpbWl0TmFtZS5SU1MsXG4gICAgc29mdExpbWl0OiAxMjgsXG4gIH1dLFxufSk7XG5cbm5ldyBJbnRlZ1Rlc3QoYXBwLCAnVGFza0RlZmluaXRpb25Db250YWluZXJVbGltaXRzJywge1xuICB0ZXN0Q2FzZXM6IFtzdGFja10sXG59KTtcblxuYXBwLnN5bnRoKCk7Il19