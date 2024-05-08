## egg 的进程架构

- master 主要负责进程间的管理和通信，不运行业务代码
- agent 主要负责只需要单独在一个进程去做的工作任务，常用于执行一些定时工作，比如日志定时归档，一些多个进程共享的数据可以暂存到 agent 上
- worker 子进程负责执行业务代码

## 为什么使用 egg

- 基于 koa 的企业级开发框架
- 内置多进程管理，包括 master（主进程）、agent、worker
- `目录结构`清晰规范，易于团队协作
- 有`插件系统`，易于扩展